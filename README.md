# GEMINI3K

A modern Electron application for registering Gemini Pro access at an affordable price without requiring an educational account.

## 🌟 Features

- **One-Click Telegram Bot Access**: Direct integration with Telegram bot for Gemini Pro registration
- **Dual Language Support**: Vietnamese and English interface with real-time language switching
- **Modern UI**: Beautiful glassmorphism design with responsive layout
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Smart Error Handling**: Comprehensive contingency handling with user-friendly notifications
- **Download Integration**: Direct link to Telegram download page

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/HulkBetii/GEMINI3K.git
cd GEMINI3K
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the application:**
```bash
npm start
```

## 🎯 Usage

1. **Open the app** - The application will launch with a modern interface
2. **Choose your language** - Click the language button (VI/EN) in the bottom-left corner
3. **Open Telegram Bot** - Click "Open Bot" to access the registration bot
4. **Download Telegram** - Use "Download Tele" if you need to install Telegram

## 🌐 Language Support

- **Vietnamese (VI)**: Default language with full UI translation
- **English (EN)**: Complete English interface
- **Real-time switching**: Change language instantly without restart
- **Keyboard shortcut**: Ctrl+L (or Cmd+L) to toggle languages

## 🛠️ Technical Details

### Architecture
- **Main Process**: Electron main process with secure IPC communication
- **Renderer Process**: Modern web interface with context isolation
- **Preload Script**: Secure API bridge between main and renderer processes

### Technologies Used
- **Electron**: Cross-platform desktop app framework
- **HTML5/CSS3**: Modern web standards with glassmorphism design
- **JavaScript (ES6+)**: Modern JavaScript with async/await patterns
- **Responsive Design**: Mobile-first approach with flexible layouts

### Security Features
- **Context Isolation**: Secure communication between processes
- **No Node Integration**: Renderer process runs in secure sandbox
- **Input Validation**: Comprehensive validation for all user inputs
- **Error Boundaries**: Graceful error handling and recovery

## 📱 Responsive Design

The application adapts to different screen sizes:
- **Desktop**: Full-width layout with side-by-side buttons
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Stacked layout with touch-friendly controls
- **Small Screens**: Compact design with essential features

## 🔧 Development

### Project Structure
```
GEMINI3K/
├── main.js              # Electron main process
├── preload.js           # Secure context bridge
├── package.json         # Dependencies and scripts
├── renderer/
│   ├── index.html       # Main UI structure
│   ├── renderer.js      # Frontend logic
│   └── styles.css       # Responsive styling
└── README.md           # This file
```

### Available Scripts
- `npm start` - Run the application
- `npm run dev` - Run with development tools (if configured)

### Language API
The application exposes a global language API for console access:
```javascript
// Switch to Vietnamese
window.languageAPI.switchLanguage('vi');

// Switch to English  
window.languageAPI.switchLanguage('en');

// Toggle between languages
window.languageAPI.toggleLanguage();

// Get current language
window.languageAPI.getCurrentLanguage();
```

## 🎨 UI Features

- **Gradient Animations**: Smooth color-shifting title animation
- **Glassmorphism Effects**: Modern translucent design elements
- **Hover Interactions**: Smooth button animations and feedback
- **Notification System**: Toast notifications with auto-dismiss
- **Accessibility**: Keyboard navigation and screen reader support

## 🔒 Privacy & Security

- **No Data Collection**: Application doesn't collect or store user data
- **Local Processing**: All operations run locally on your device
- **Secure Communication**: Encrypted IPC between processes
- **No External Dependencies**: Minimal external network requests

## 🐛 Troubleshooting

### Common Issues

1. **App won't start**
   - Ensure Node.js 18+ is installed
   - Run `npm install` to install dependencies
   - Check console for error messages

2. **Telegram won't open**
   - Install Telegram desktop app
   - Check if Telegram is set as default handler for `tg://` links
   - Try the web fallback option

3. **Language not switching**
   - Refresh the application
   - Check browser console for errors
   - Use keyboard shortcut Ctrl+L (or Cmd+L)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section above
- Review the console logs for error details

## 🔄 Updates

Stay updated with the latest features and improvements by:
- Watching the repository for notifications
- Checking the releases page
- Following the development progress

---

**GEMINI3K** - Your gateway to affordable Gemini Pro access! 🚀
