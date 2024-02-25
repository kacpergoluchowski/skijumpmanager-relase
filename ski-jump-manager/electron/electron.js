const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs')

const isDev = process.env.IS_DEV == "true" ? true : false;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 650,
    autoHideMenuBar: true,
    resizable: true,
    frame: true,
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    },
  });

  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: "deny" };
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// ----------------------------------------------------------------------------------- END POINTY -----------------------------------------------------------------------------------

ipcMain.on('closeApp', () => {
  app.quit();
})

ipcMain.on('createNewGame', (event, selectedCountry) => {
  const fileComponents = {
    folderName: "Ski jumping manager",
    subFolderName: "savegame1",
    fileName: 'savegame.json'
  }

  const fileContent = {
    id: selectedCountry.id,
    name: selectedCountry.name,
    day: 10,
    month: 5,
    year: 2024
  }

  const documentsPath = app.getPath('documents');
  const folderPath = path.join(documentsPath, fileComponents.folderName);
  const subFolderPath = path.join(folderPath, fileComponents.subFolderName);
  const filePath = path.join(subFolderPath, fileComponents.fileName);

  fs.mkdir(folderPath, { recursive: true }, err => {
    if (err) {
      console.log(err);
    }
    else {
      fs.mkdir(subFolderPath, { recursive: true }, err => {
        if (err) {
          console.log(err);
        }
        else {
          fs.writeFile(filePath, JSON.stringify(fileContent), err => {
            if (err) {
              console.log(err);
            }
            else {
              console.log('gra została utworzona pomyślnie!');
            }
          })
        }
      })
    }
  })
})

ipcMain.on('loadSave', (event) => {
  loadSaveGame(event);
})

function loadSaveGame(event) {
  const fileComponents = {
    folderName: "Ski jumping manager",
    subFolderName: "savegame1",
    fileName: 'savegame.json'
  }

  const documentsPath = app.getPath('documents');
  const folderPath = path.join(documentsPath, fileComponents.folderName);
  const subFolderPath = path.join(folderPath, fileComponents.subFolderName);
  const filePath = path.join(subFolderPath, fileComponents.fileName);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      const countryDataJson = JSON.parse(data);
      
      event.reply('saveGameDataResponse', countryDataJson);
    }
  })
}