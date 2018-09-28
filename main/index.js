const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const MenuTemplete = require('./menuTemplete')

// mainWindow 需要暴露在全局下面，不然会被当作垃圾自动回收（当应用最小化托管的时候）
let mainWindow

// 用来监听是否为开发环境
const isDev = process.env.NODE_ENV === 'development'

// 创建窗口
function createWindow() {
  Menu.setApplicationMenu(MenuTemplete)

  let init = {
    // 窗口的默认标题
    title: 'Electron_react',
    // 自动隐藏菜单栏
    autoHideMenuBar: true,
    titleBarStyle: 'hidden-inset',
    // 直到加载完成才显示桌面（可能会导致白屏）
    show: false,
    // 背景透明
    // transparent: true,
    // 无边框
    // frame: false,
    // width: 1024,
    // height: 768,
    webPreferences: {
      // 打开本地图片预览
      webSecurity: false
    }
  }

  mainWindow = new BrowserWindow(init)

  // 加载页面，开发模式下用url，便于支持热更新
  // 生产环境用静态页面
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
    // 开发环境打开devTool
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
    // mainWindow.webContents.openDevTools();
  })

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

// 不开启缓存
// 需要放置在ready事件之前
// app.commandLine.appendSwitch("--disable-http-cache")
app.on('ready', createWindow)

// 当所有窗口关闭的时候
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
  //当应用被激活时发出。
  //各种操作都可以触发此事件
  //例如首次启动应用程序、尝试在应用程序已运行时或单击应用程序的坞站或任务栏图标时重新激活它
  // mac触发，win不触发
  if (mainWindow === null) {
    createWindow()
  }
})

require('./autoUpdater') // 版本升级
