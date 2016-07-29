var electron = require('electron');

// Main app obj
var app = electron.app;

// Broweser window
var BrowserWindow = electron.BrowserWindow;

var window;

function createWindow(){

    window = new BrowserWindow({width : 800, height : 800, title: "Notes"});    
    window.loadURL(`file://${__dirname}/index.html`);
  //  window.webContents.openDevTools();
    window.on('close', function() {
        window = null;
    });
}

app.on('ready', createWindow);

app.on('windows-all-closed', () => {
    if(process.platform != 'darwin'){
        app.quit();
    }
});


app.on('activate', () => {
    if(window == null){
        createWindow();
    }
});