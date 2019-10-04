const { app, BrowserWindow } = require('electron');

app.on('ready', function () {
  const mainWindow = new BrowserWindow({ width: 600, height: 800 });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
});