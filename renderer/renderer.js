// DOM elements
const openButton = document.getElementById('open-button');
const downloadButton = document.getElementById('download-button');
const languageButton = document.getElementById('language-button');

// Language management
let currentLanguage = 'vi'; // Default to Vietnamese
const languages = {
    en: {
        // Console logs
        connectivityCheckFailed: 'Connectivity check failed:',
        attemptFailed: 'Attempt',
        operationInProgress: 'Operation already in progress',
        networkIssuesDetected: 'Network connectivity issues detected',
        operationCompleted: 'Operation completed successfully:',
        openedUsingMethod: 'Opened using method:',
        errorInHandleOpenClick: 'Error in handleOpenClick:',
        errorDetails: 'Error details:',
        globalErrorCaught: 'Global error caught:',
        unhandledPromiseRejection: 'Unhandled promise rejection:',
        appHiddenDuringOperation: 'App hidden during operation',
        appVisibleAgain: 'App visible again during operation',
        errorOpeningDownload: 'Error opening download page:',
        openButtonNotFound: 'Open button not found in DOM',
        downloadButtonNotFound: 'Download button not found in DOM',
        appInitialized: 'GEMINI3K initialized with contingency handling',
        requiredElementNotFound: 'Required element not found:',
        apiNotAvailableOnInit: 'API not available on initialization',
        appClosing: 'App is closing...',
        languageSwitched: 'Language switched to:',
        languageNotSupported: 'Language not supported',
        
        // UI Text
        mainTitle: 'REGISTER GEMINI PRO FOR ONLY 3K WITHOUT NEEDING AN EDU ACCOUNT',
        heroTitle: 'Ready to Get Started?',
        heroDescription: 'Click the button below to Open Bot and register for Gemini Pro.',
        
        // Messages
        networkIssuesWarning: '⚠️ Network issues detected. Attempting anyway...',
        telegramAppSuccess: '✅ Successfully opened Telegram app!',
        webBrowserSuccess: '✅ Opened in web browser!',
        generalSuccess: '✅ Successfully opened!',
        telegramInstallError: '❌ Unable to open Telegram. Please install Telegram or try manually.',
        operationTimeout: '⏰ Operation timed out. Please try again.',
        webFallbackWarning: '⚠️ Could not open Telegram. Opened web instead.',
        unexpectedError: '❌ An unexpected error occurred.',
        apiNotAvailable: '❌ Application API not available. Please restart the app.',
        invalidBotConfig: '❌ Invalid bot configuration. Please contact support.',
        timeoutError: '⏰ Operation timed out. Please check your connection and try again.',
        networkError: '🌐 Network error. Please check your internet connection.',
        networkConnectionFailed: '🌐 Network connection failed. Please try again.',
        globalError: '❌ An unexpected error occurred. Please refresh the page.',
        operationFailed: '❌ An operation failed unexpectedly. Please try again.',
        appNotInitialized: '⚠️ Application not properly initialized. Please restart.',
        downloadSuccess: '📱 Opened Telegram download page in browser!',
        downloadError: '❌ Could not open Telegram download page. Please try again.'
    },
    vi: {
        // Console logs
        connectivityCheckFailed: 'Kiểm tra kết nối thất bại:',
        attemptFailed: 'Lần thử',
        operationInProgress: 'Thao tác đang được thực hiện',
        networkIssuesDetected: 'Phát hiện vấn đề kết nối mạng',
        operationCompleted: 'Thao tác hoàn thành thành công:',
        openedUsingMethod: 'Đã mở bằng phương thức:',
        errorInHandleOpenClick: 'Lỗi trong handleOpenClick:',
        errorDetails: 'Chi tiết lỗi:',
        globalErrorCaught: 'Bắt được lỗi toàn cục:',
        unhandledPromiseRejection: 'Promise rejection không được xử lý:',
        appHiddenDuringOperation: 'Ứng dụng bị ẩn trong quá trình thao tác',
        appVisibleAgain: 'Ứng dụng hiển thị lại trong quá trình thao tác',
        errorOpeningDownload: 'Lỗi mở trang tải:',
        openButtonNotFound: 'Không tìm thấy nút Open trong DOM',
        downloadButtonNotFound: 'Không tìm thấy nút Download trong DOM',
        appInitialized: 'GEMINI3K đã khởi tạo với xử lý dự phòng',
        requiredElementNotFound: 'Không tìm thấy phần tử bắt buộc:',
        apiNotAvailableOnInit: 'API không khả dụng khi khởi tạo',
        appClosing: 'Ứng dụng đang đóng...',
        languageSwitched: 'Đã chuyển ngôn ngữ sang:',
        languageNotSupported: 'Ngôn ngữ không được hỗ trợ',
        
        // UI Text
        mainTitle: 'ĐĂNG KÝ GEMINI PRO CHỈ VỚI 3K MÀ KHÔNG CẦN TÀI KHOẢN EDU',
        heroTitle: 'Bạn đã sẵn sàng bắt đầu chưa?',
        heroDescription: 'Bấm nút bên dưới để mở Bot và đăng ký Gemini Pro.',
        
        // Messages
        networkIssuesWarning: '⚠️ Phát hiện vấn đề mạng. Vẫn sẽ thử tiếp...',
        telegramAppSuccess: '✅ Đã mở ứng dụng Telegram thành công!',
        webBrowserSuccess: '✅ Đã mở trong trình duyệt web!',
        generalSuccess: '✅ Mở thành công!',
        telegramInstallError: '❌ Không thể mở Telegram. Vui lòng cài đặt Telegram hoặc thử thủ công.',
        operationTimeout: '⏰ Thao tác hết thời gian chờ. Vui lòng thử lại.',
        webFallbackWarning: '⚠️ Không thể mở Telegram. Đã mở web thay thế.',
        unexpectedError: '❌ Đã xảy ra lỗi không mong muốn.',
        apiNotAvailable: '❌ API ứng dụng không khả dụng. Vui lòng khởi động lại ứng dụng.',
        invalidBotConfig: '❌ Cấu hình bot không hợp lệ. Vui lòng liên hệ hỗ trợ.',
        timeoutError: '⏰ Thao tác hết thời gian chờ. Vui lòng kiểm tra kết nối và thử lại.',
        networkError: '🌐 Lỗi mạng. Vui lòng kiểm tra kết nối internet.',
        networkConnectionFailed: '🌐 Kết nối mạng thất bại. Vui lòng thử lại.',
        globalError: '❌ Đã xảy ra lỗi không mong muốn. Vui lòng làm mới trang.',
        operationFailed: '❌ Một thao tác thất bại không mong muốn. Vui lòng thử lại.',
        appNotInitialized: '⚠️ Ứng dụng chưa được khởi tạo đúng cách. Vui lòng khởi động lại.',
        downloadSuccess: '📱 Đã mở trang tải Telegram trong trình duyệt!',
        downloadError: '❌ Không thể mở trang tải Telegram. Vui lòng thử lại.'
    }
};

// Language switching functions
function getLogText(key) {
    return languages[currentLanguage][key] || languages['en'][key] || key;
}

function switchLanguage(lang) {
    if (languages[lang]) {
        currentLanguage = lang;
        console.log(`${getLogText('languageSwitched')} ${lang}`);
        updateLanguageButton();
        updateUIText();
        return true;
    } else {
        console.warn(`${getLogText('languageNotSupported')}: ${lang}`);
        return false;
    }
}

function getCurrentLanguage() {
    return currentLanguage;
}

function getSupportedLanguages() {
    return Object.keys(languages);
}

function toggleLanguage() {
    const supportedLanguages = getSupportedLanguages();
    const currentIndex = supportedLanguages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    const nextLanguage = supportedLanguages[nextIndex];
    
    return switchLanguage(nextLanguage);
}

function updateLanguageButton() {
    if (languageButton) {
        const languageText = languageButton.querySelector('.language-text');
        if (languageText) {
            languageText.textContent = currentLanguage.toUpperCase();
        }
    }
}

function updateUIText() {
    // Update main title
    const mainTitle = document.querySelector('.title');
    if (mainTitle) {
        mainTitle.textContent = getLogText('mainTitle');
    }
    
    // Update hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.textContent = getLogText('heroTitle');
    }
    
    // Update hero description
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        heroDescription.textContent = getLogText('heroDescription');
    }
}

// State management
let isProcessing = false;
let retryCount = 0;
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

// Contingency handlers
const ContingencyHandlers = {
    // Network connectivity check
    checkConnectivity: async () => {
        try {
            const response = await fetch('https://www.google.com', { 
                method: 'HEAD', 
                mode: 'no-cors',
                cache: 'no-cache'
            });
            return true;
        } catch (error) {
            console.warn('Kiểm tra kết nối thất bại:', error);
            return false;
        }
    },

    // Check if API is available
    checkAPI: () => {
        return typeof window.api !== 'undefined' && 
               typeof window.api.openTelegram === 'function';
    },

    // Validate bot username
    validateBotUsername: (username) => {
        if (!username || typeof username !== 'string') {
            return false;
        }
        // Telegram bot username validation
        const botPattern = /^[a-zA-Z0-9_]{5,32}$/;
        return botPattern.test(username);
    },

    // Handle timeout scenarios
    withTimeout: (promise, timeoutMs = 10000) => {
        return Promise.race([
            promise,
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Operation timeout')), timeoutMs)
            )
        ]);
    },

    // Retry mechanism with exponential backoff
    retryWithBackoff: async (fn, maxRetries = MAX_RETRIES) => {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await fn();
            } catch (error) {
                console.warn(`Lần thử ${attempt} thất bại:`, error);
                
                if (attempt === maxRetries) {
                    throw error;
                }
                
                // Exponential backoff: 2s, 4s, 8s
                const delay = RETRY_DELAY * Math.pow(2, attempt - 1);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
};

// Enhanced notification system with animations
function showMessage(message, type = 'info', duration = 4000) {
    // Remove existing notification if any
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        hideNotification(existingMessage);
    }
    
    // Create notification element
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.textContent = message;
    
    // Add to body (fixed positioning)
    document.body.appendChild(messageEl);
    
    // Trigger show animation after a brief delay
    setTimeout(() => {
        messageEl.classList.add('show');
    }, 10);
    
    // Auto-hide after specified duration
    setTimeout(() => {
        hideNotification(messageEl);
    }, duration);
}

// Hide notification with animation
function hideNotification(messageEl) {
    if (!messageEl || !messageEl.parentNode) return;
    
    messageEl.classList.remove('show');
    messageEl.classList.add('hide');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.parentNode.removeChild(messageEl);
        }
    }, 300); // Match CSS transition duration
}

// Update button state
function updateButtonState(state, text, icon) {
    if (!openButton) return;
    
    const buttonText = openButton.querySelector('.button-text');
    const buttonIcon = openButton.querySelector('.button-icon');
    
    if (buttonText) buttonText.textContent = text;
    if (buttonIcon) buttonIcon.textContent = icon;
    
    switch (state) {
        case 'loading':
            openButton.disabled = true;
            openButton.style.opacity = '0.7';
            break;
        case 'error':
            openButton.disabled = false;
            openButton.style.opacity = '1';
            break;
        case 'success':
            openButton.disabled = false;
            openButton.style.opacity = '1';
            break;
        case 'idle':
        default:
            openButton.disabled = false;
            openButton.style.opacity = '1';
            break;
    }
}

// Enhanced open button click handler with comprehensive contingency logic
async function handleOpenClick() {
    // Prevent multiple simultaneous clicks
    if (isProcessing) {
        console.warn('Thao tác đang được thực hiện');
        return;
    }
    
    isProcessing = true;
    retryCount = 0;
    
    try {
        // Pre-flight checks
        await performPreFlightChecks();
        
        // Update UI to loading state
        updateButtonState('loading', 'Đang kiểm tra...', '🔍');
        
        // Perform the main operation with retry logic
        const result = await ContingencyHandlers.retryWithBackoff(async () => {
            return await ContingencyHandlers.withTimeout(
                window.api.openTelegram('sheeridverify_bot'),
                15000 // 15 second timeout
            );
        });
        
        // Handle successful result
        handleSuccessfulResult(result);
        
    } catch (error) {
        // Handle different types of errors
        await handleError(error);
    } finally {
        // Always reset state
        isProcessing = false;
        updateButtonState('idle', 'Open Bot', '🚀');
    }
}

// Pre-flight checks before attempting to open Telegram
async function performPreFlightChecks() {
    // Check if API is available
    if (!ContingencyHandlers.checkAPI()) {
        throw new Error('API_NOT_AVAILABLE');
    }
    
    // Validate bot username
    if (!ContingencyHandlers.validateBotUsername('sheeridverify_bot')) {
        throw new Error('INVALID_BOT_USERNAME');
    }
    
    // Check network connectivity (non-blocking)
    const isConnected = await ContingencyHandlers.checkConnectivity();
    if (!isConnected) {
        console.warn('Phát hiện vấn đề kết nối mạng');
        showMessage(getLogText('networkIssuesWarning'), 'warning', 3000);
    }
}

// Handle successful API result
function handleSuccessfulResult(result) {
    console.log('Thao tác hoàn thành thành công:', result);
    
    if (result && result.ok) {
        const method = result.method || 'unknown';
        console.log('Đã mở bằng phương thức:', method);
        
        // Show success message based on method used
        if (method === 'tg') {
            showMessage(getLogText('telegramAppSuccess'), 'success');
        } else if (method === 'web') {
            showMessage(getLogText('webBrowserSuccess'), 'success');
        } else {
            showMessage(getLogText('generalSuccess'), 'success');
        }
        
        updateButtonState('success', 'Thành công!', '✅');
        
        // Reset to idle state after 2 seconds
        setTimeout(() => {
            updateButtonState('idle', 'Open Bot', '🚀');
        }, 2000);
        
    } else {
        // Handle API returned error
        handleAPIError(result);
    }
}

// Handle API errors
function handleAPIError(result) {
    const error = result?.error || 'unknown_error';
    
    switch (error) {
        case 'no-handler-succeeded':
            showMessage(getLogText('telegramInstallError'), 'error', 8000);
            updateButtonState('error', 'Thử lại', '🔄');
            break;
        case 'timeout':
            showMessage(getLogText('operationTimeout'), 'warning', 6000);
            updateButtonState('error', 'Thử lại', '🔄');
            break;
        default:
            showMessage(getLogText('webFallbackWarning'), 'warning', 6000);
            updateButtonState('error', 'Thử lại', '🔄');
            break;
    }
}

// Comprehensive error handling
async function handleError(error) {
    console.error('Lỗi trong handleOpenClick:', error);
    
    let errorMessage = getLogText('unexpectedError');
    let errorType = 'error';
    
    // Categorize errors
    if (error.message === 'API_NOT_AVAILABLE') {
        errorMessage = getLogText('apiNotAvailable');
        errorType = 'error';
    } else if (error.message === 'INVALID_BOT_USERNAME') {
        errorMessage = getLogText('invalidBotConfig');
        errorType = 'error';
    } else if (error.message === 'Operation timeout') {
        errorMessage = getLogText('timeoutError');
        errorType = 'warning';
    } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage = getLogText('networkError');
        errorType = 'warning';
    } else if (error.message.includes('Failed to fetch')) {
        errorMessage = getLogText('networkConnectionFailed');
        errorType = 'warning';
    }
    
    // Show error message
    showMessage(errorMessage, errorType, 8000);
    
    // Update button state
    updateButtonState('error', 'Thử lại', '🔄');
    
    // Log error details for debugging
    console.error('Chi tiết lỗi:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
    });
}

// Global error handler for unhandled errors
window.addEventListener('error', (event) => {
    console.error('Bắt được lỗi toàn cục:', event.error);
    showMessage(getLogText('globalError'), 'error', 10000);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Promise rejection không được xử lý:', event.reason);
    showMessage(getLogText('operationFailed'), 'error', 8000);
    event.preventDefault(); // Prevent the default browser behavior
});

// Keyboard accessibility
document.addEventListener('keydown', (event) => {
    // Enter key on button
    if (event.key === 'Enter' && event.target === openButton && !isProcessing) {
        handleOpenClick();
    }
    
    // Escape key to clear messages
    if (event.key === 'Escape') {
        const message = document.querySelector('.message');
        if (message) {
            hideNotification(message);
        }
    }
    
    // Ctrl+L or Cmd+L to toggle language
    if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
        event.preventDefault();
        toggleLanguage();
    }
});

// Visibility change handler (when user switches tabs)
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isProcessing) {
        console.log('Ứng dụng bị ẩn trong quá trình thao tác');
    } else if (!document.hidden && isProcessing) {
        console.log('Ứng dụng hiển thị lại trong quá trình thao tác');
    }
});

// Handle download button click
function handleDownloadClick() {
    try {
        // Open Telegram download page in browser
        const winRef = window.open('https://desktop.telegram.org/', '_blank');
        if (!winRef) {
            throw new Error('WINDOW_OPEN_BLOCKED');
        }
        showMessage(getLogText('downloadSuccess'), 'success', 3000);
    } catch (error) {
        console.error('Lỗi mở trang tải:', error);
        showMessage(getLogText('downloadError'), 'error', 5000);
    }
}

// Event listeners
if (openButton) {
    openButton.addEventListener('click', handleOpenClick);
} else {
    console.error('Không tìm thấy nút Open trong DOM');
}

if (downloadButton) {
    downloadButton.addEventListener('click', handleDownloadClick);
} else {
    console.error(getLogText('downloadButtonNotFound'));
}

if (languageButton) {
    languageButton.addEventListener('click', toggleLanguage);
} else {
    console.error('Language button not found in DOM');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('GEMINI3K đã khởi tạo với xử lý dự phòng');
    
    // Verify all required elements are present
    const requiredElements = {
        openButton: openButton,
        downloadButton: downloadButton,
        languageButton: languageButton,
        container: document.querySelector('.app-container')
    };
    
    for (const [name, element] of Object.entries(requiredElements)) {
        if (!element) {
            console.error(`Không tìm thấy phần tử bắt buộc: ${name}`);
        }
    }
    
    // Check if API is available
    if (!ContingencyHandlers.checkAPI()) {
        console.error('API không khả dụng khi khởi tạo');
        showMessage(getLogText('appNotInitialized'), 'warning', 10000);
    }
    
    // Set initial button state
    updateButtonState('idle', 'Open Bot', '🚀');
    
    // Initialize language button and UI text
    updateLanguageButton();
    updateUIText();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    console.log('Ứng dụng đang đóng...');
    isProcessing = false;
});

// Expose language functions globally for console access
window.languageAPI = {
    switchLanguage,
    toggleLanguage,
    getCurrentLanguage,
    getSupportedLanguages,
    getLogText
};

// Console help message
console.log('🌐 Language API available: window.languageAPI');
console.log('📝 Commands: switchLanguage("vi"), toggleLanguage(), getCurrentLanguage()');
console.log('⌨️  Keyboard shortcut: Ctrl+L (or Cmd+L) to toggle language');
