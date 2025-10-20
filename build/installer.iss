; Inno Setup Script for GEMINI3K
; Builds a single installer: GEMINI3K-Setup.exe
; Requirements: Inno Setup 6+

#define MyAppName "GEMINI3K"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "GEMINI3K"
#define MyAppExeName "GEMINI3K.exe"

; NOTE: Set this to match the output folder created by electron-packager
; Example: dist\\GEMINI3K-win32-x64
#define BuildOutputDir "..\\dist\\GEMINI3K-win32-x64"

[Setup]
AppId={{8B8B3E2F-2C5F-43D9-A8A9-2F6D21A6C3D1}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
DefaultDirName={pf}\\{#MyAppName}
DefaultGroupName={#MyAppName}
OutputDir=..\\dist
OutputBaseFilename=GEMINI3K-Setup
Compression=lzma
SolidCompression=yes
ArchitecturesInstallIn64BitMode=x64
DisableProgramGroupPage=yes
WizardStyle=modern
SetupIconFile={#SourcePath}icon.ico

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "Create a &desktop icon"; GroupDescription: "Additional icons:"; Flags: unchecked

[Files]
; App files
Source: "{#BuildOutputDir}\\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; App icon for shortcuts
Source: "{#SourcePath}icon.ico"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{autoprograms}\\{#MyAppName}"; Filename: "{app}\\{#MyAppExeName}"; IconFilename: "{app}\\icon.ico"; IconIndex: 0
Name: "{autodesktop}\\{#MyAppName}"; Filename: "{app}\\{#MyAppExeName}"; IconFilename: "{app}\\icon.ico"; IconIndex: 0; Tasks: desktopicon

[Run]
Filename: "{app}\\{#MyAppExeName}"; Description: "Launch {#MyAppName}"; Flags: nowait postinstall skipifsilent
