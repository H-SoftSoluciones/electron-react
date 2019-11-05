const { app, Menu } = require('electron')
const pkg = require('./package.json')

let template = [
  {
    label: "Ver",
    submenu: [
      {
        label: "Cambio a pantalla completa",
        accelerator: (() => {
          if (process.platform === "darwin") {
            return "F12";
          } else {
            return "F12";
          }
        })(),
        click(item, focusedWindow) {
          if (focusedWindow) {
            const fullScreen = !focusedWindow.isFullScreen();
            focusedWindow.webContents.send("res_F12", { fullScreen });
            focusedWindow.setFullScreen(fullScreen);
          }
        }
      },
      {
        label: "Minimizar",
        accelerator: "CmdOrCtrl+M",
        role: "minimize"
      },
      {
        label: "Ocultar",
        accelerator: "Command+H",
        role: "hide"
      },
      {
        label: "cerrar",
        accelerator: "CmdOrCtrl+W",
        role: "close"
      }
    ]
  },
  {
    label: "Editar",
    submenu: [
      {
        label: "Cancelar",
        accelerator: "CommandOrControl+Z",
        selector: "undo:"
      },
      {
        label: "Recuperación",
        accelerator: "Shift+CommandOrControl+Z",
        selector: "redo:"
      },
      { type: "separator" },
      { label: "cortar", accelerator: "CommandOrControl+X", selector: "cut:" },
      { label: "copiar", accelerator: "CommandOrControl+C", selector: "copy:" },
      { label: "pegar", accelerator: "CommandOrControl+V", selector: "paste:" },
      {
        label: "selecionar todo",
        accelerator: "CommandOrControl+A",
        selector: "selectAll:"
      }
    ]
  }
];

if (process.platform === 'darwin') {
  const name = pkg.productName
  template.unshift({
    label: name,
    submenu: [
      {
        label: "Acerca de",
        role: "about"
      },
      {
        type: "separator"
      },
      {
        label: "Ambientación",
        role: "services",
        submenu: []
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        accelerator: "Command+Q",
        click() {
          app.quit();
        }
      }
    ]
  });
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
