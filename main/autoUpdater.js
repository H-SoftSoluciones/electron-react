const { ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");
const config = require("./config");
// const feedUrl = `${config.updateurl}/${process.platform}?v=${appVersion}`
const feedUrl = `${config.updateurl}/${
  process.platform === "darwin" ? "mac" : "win"
}`;

ipcMain.on("req_update", event => {
  const sendUpdateMessage = (message, data) => {
    event.sender.send("res_update", {
      message,
      data
    });
  };

  autoUpdater.setFeedURL(feedUrl);

  autoUpdater.on("error", message => {
    sendUpdateMessage("error", message);
  });

  autoUpdater.on("checking-for-update", message => {
    sendUpdateMessage("checking-for-update", message);
  });

  autoUpdater.on("update-available", message => {
    sendUpdateMessage("update-available", message);
  });

  autoUpdater.on("update-not-available", message => {
    sendUpdateMessage("update-not-available", message);
  });

  // 更新下载进度事件
  autoUpdater.on("download-progress", progressObj => {
    sendUpdateMessage("downloadProgress", progressObj);
  });

  autoUpdater.on("update-downloaded", () => {
    // ipcMain.on('update_now', (e, arg) => {
    //   // some code here to handle event
    //   autoUpdater.quitAndInstall()
    // })
    sendUpdateMessage("isUpdateNow");
    autoUpdater.quitAndInstall();
  });

  // Realizar una verificación de actualización automática
  autoUpdater.checkForUpdates();
});
