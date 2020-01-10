const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {ipcMain} = require('electron');
const say = require('say');

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  // Define the applications dimension
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  // Determine what to render based on environment
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  
  say.speak('Ticket number A, 114. To, counter number, 7.', 'Fiona', null, (err) => {
    if (err) { return console.error(err) }
    console.log('Text has been saved to hal.wav.')
  })
  
  // console.log('====================================');
  // console.log(voices);
  // console.log('====================================');

  // say.speak("Hello world", 'Good News', 1.0, (err) => {
  //   if (err) {
  //     return console.error(err)
  //   }
  
  //   console.log('Text has been spoken.')
  // });

  // Show chrome developer tools when in dev environment
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  // Create event to close window on close
  mainWindow.on("closed", () => (mainWindow = null));
}

ipcMain.on('callmyname', (event, arg) => {

  console.log(
    "hi", arg
  );
});

// On launch create app window
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    // Based on which operating system you are using
  if (process.platform !== "linux") {
      // If os not linux, close the app
      // you can add darwin(mac os), win64 and so many more
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow !== null) {
    createWindow();
  }
});
