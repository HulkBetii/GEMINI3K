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

// IPC handler for opening Telegram links
ipcMain.handle('open-telegram', async (event, domain) => {
  let tgError = null;
  let webError = null;
  
  // First try: tg:// protocol
  try {
    await shell.openExternal(`tg://resolve?domain=${domain}`);
    return { ok: true, method: 'tg' };
  } catch (error) {
    tgError = error;
    console.log('tg:// protocol failed, trying web fallback:', error.message);
  }
  
  // Second try: web fallback
  try {
    await shell.openExternal(`https://t.me/${domain}`);
    return { ok: true, method: 'web' };
  } catch (error) {
    webError = error;
    console.error('Web fallback also failed:', error.message);
  }
  
  // Both methods failed
  console.error('Both tg:// and web methods failed');
  return { ok: false, error: 'no-handler-succeeded' };
});
