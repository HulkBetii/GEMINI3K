const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    title: 'GEMINI3K'
  });

  // Load the index.html file
  mainWindow.loadFile(path.join(__dirname, 'renderer/index.html'));

  // Emitted when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS, re-create a window when the dock icon is clicked
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Utility: validate Telegram username (5-32 chars, letters, numbers, underscore)
function isValidTelegramUsername(name) {
  if (typeof name !== 'string') return false;
  const trimmed = name.trim();
  if (trimmed.startsWith('@')) {
    return /^[A-Za-z0-9_]{5,32}$/.test(trimmed.slice(1));
  }
  return /^[A-Za-z0-9_]{5,32}$/.test(trimmed);
}

// Utility: open external URL with timeout protection
async function openExternalWithTimeout(url, timeoutMs = 10000) {
  return await Promise.race([
    shell.openExternal(url),
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')),
      Math.max(1000, timeoutMs)))
  ]);
}

// IPC handler for opening Telegram links
ipcMain.handle('open-telegram', async (event, rawDomain) => {
  try {
    // Ensure app is ready
    if (!app || !app.isReady()) {
      return { ok: false, error: 'app-not-ready' };
    }

    // Resolve and validate domain
    const domainInput = typeof rawDomain === 'string' ? rawDomain.trim() : '';
    const domain = domainInput || 'sheeridverify_bot';

    if (!isValidTelegramUsername(domain)) {
      return { ok: false, error: 'invalid-domain' };
    }

    // Attempt tg:// first with timeout
    try {
      await openExternalWithTimeout(`tg://resolve?domain=${domain}`, 10000);
      return { ok: true, method: 'tg' };
    } catch (tgErr) {
      // Fall back to web even on timeout or error
      try {
        await openExternalWithTimeout(`https://t.me/${domain}`, 10000);
        return { ok: true, method: 'web' };
      } catch (webErr) {
        // Both failed
        return {
          ok: false,
          error: 'no-handler-succeeded',
          details: {
            tg: tgErr && (tgErr.message || String(tgErr)),
            web: webErr && (webErr.message || String(webErr))
          }
        };
      }
    }
  } catch (unhandled) {
    // Last-resort catch-all
    return { ok: false, error: 'unhandled-main-error', message: (unhandled && unhandled.message) || String(unhandled) };
  }
});
