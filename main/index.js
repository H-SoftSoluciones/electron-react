const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const MenuTemplete = require('./menuTemplete')

// ventana principal
let mainWindow

// Se usa para monitorear si es un entorno de desarrollo
const isDev = process.env.NODE_ENV === 'development'

// Crea una ventana
function createWindow() {
  Menu.setApplicationMenu(MenuTemplete)

  let init = {
    // el título predeterminado de la ventana
    title: "Libreria Y Papeleria Dany",
    // oculta automáticamente la barra de menú
    autoHideMenuBar: true,
    titleBarStyle: "hidden-inset",
    // El escritorio no se muestra hasta que se completa la carga (puede resultar en una pantalla en blanco)
    show: false,

    // sin borde
    frame: false,
    //alto
    width: 1024,
    // ancho
    height: 768,
    webPreferences: {
      // otras configuraciones
      webSecurity: false,
      nodeIntegration: true
    }
  };

  mainWindow = new BrowserWindow(init)

  // Cargue la página, use la url en modo de desarrollo, 
  //fácil de soportar actualizaciones calientes
  // Entorno de producción con páginas estáticas.
  let indexPath
  if (isDev) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    })
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'index.html'),
      slashes: true
    })
  }
  mainWindow.loadURL(indexPath)

  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize()
    mainWindow.show()
    // abrir devTool
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
    // mainWindow.webContents.openDevTools();
  })

  mainWindow.on('closed', function() {
    mainWindow = null
  })
} 

app.on('ready', createWindow)

// cuando todas las ventanas están cerradas
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform !== 'darwin') {
  //   Reset()
  //   app.quit();
  // }
  app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

require('./autoUpdater') // actualización de versión
