const { app, Menu } = require('electron')
const pkg = require('./package.json')

let template = [
  {
    label: '视图',
    submenu: [
      {
        label: '全屏切换',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'F12'
          } else {
            return 'F12'
          }
        })(),
        click(item, focusedWindow) {
          if (focusedWindow) {
            const fullScreen = !focusedWindow.isFullScreen()
            focusedWindow.webContents.send('res_F12', { fullScreen })
            focusedWindow.setFullScreen(fullScreen)
          }
        }
      },
      {
        label: '最小化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: '隐藏',
        accelerator: 'Command+H',
        role: 'hide'
      },
      {
        label: '关闭',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      { label: '撤销', accelerator: 'CommandOrControl+Z', selector: 'undo:' },
      {
        label: '恢复',
        accelerator: 'Shift+CommandOrControl+Z',
        selector: 'redo:'
      },
      { type: 'separator' },
      { label: '剪切', accelerator: 'CommandOrControl+X', selector: 'cut:' },
      { label: '复制', accelerator: 'CommandOrControl+C', selector: 'copy:' },
      { label: '粘贴', accelerator: 'CommandOrControl+V', selector: 'paste:' },
      {
        label: '全选',
        accelerator: 'CommandOrControl+A',
        selector: 'selectAll:'
      }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = pkg.productName
  template.unshift({
    label: name,
    submenu: [
      {
        label: '关于',
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        label: '设置',
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click() {
          app.quit()
        }
      }
    ]
  })
}

if (process.env.NODE_ENV === 'development') {
  template.push({
    label: 'tool',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click(item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.reload()
          }
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I'
          } else {
            return 'Ctrl+Shift+I'
          }
        })(),
        click(item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.toggleDevTools()
          }
        }
      }
    ]
  })
}

module.exports = Menu.buildFromTemplate(template)
