## 婚礼纪 · 水镜 (water · mirror)

![screen](https://qnm.hunliji.com/o_1cl18tdu42sh7d1od9bch1al17.png?imageView2/2/w/1920/h/1920/format/webp)

[婚礼纪 · 水镜](http://www.hunliji.com/p/wedding/Public/web/activity/storeMarketDownLoad.html) 桌面客户端。

[![Build Status](https://travis-ci.org/xwartz/PupaFM.svg?branch=master)](https://travis-ci.org/xwartz/PupaFM)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![MIT Licensed](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

## 用到的一些技术

![based on](https://qnm.hunliji.com/o_1cl1983n812pe60c1o9a1k3ifq8h.png)

1. 跨平台工具: [Electron](http://electron.atom.io/)

2. 打包工具: [Webpack](http://webpack.github.io/docs/), [Babel](https://babeljs.io), [electron-builder](https://github.com/electron-userland/electron-builder)

3. 编写语言: [ES2015](https://babeljs.io/docs/learn-es2015/), [Less](http://lesscss.cn/)

4. 使用的框架(库): [React](https://facebook.github.io/react/), [mobx](https://cn.mobx.js.org/),
   [Ant Design](https://ant.design/),
   [React Router](https://github.com/reactjs/react-router),
   [React Hot Loader](https://github.com/gaearon/react-hot-loader),

5. 代码静态检测: [ESLint](http://eslint.org/)

## 下载最新版本

[windows](https://qnm.hunliji.com/water_mirror/win/%E6%B0%B4%E9%95%9C%20Setup%201.1.1.exe)

[mac](https://qnm.hunliji.com/water_mirror/mac/%E6%B0%B4%E9%95%9C-1.1.1.dmg)

## 开发

![based on](https://qnm.hunliji.com/o_1cl19jl4ljle1p4loot1di1k1jm.png?imageView2/2/w/1920/h/1920/format/webp)

快捷键

> Q: 后退/返回上一层

> W: 打开关闭菜单

> E: 前进/返回之前的页面

> F12: 进入/退出全屏模式

> ESC: 关闭新打开的页面

### 本地开发

克隆仓库

```bash
http://git.hljnbw.cn:3018/xi_feng/electron_deskTop_app.git
```

安装依赖模块，推荐安装淘宝镜像

```bash
$ npm install nrm -g
$ nrm use taobao
$ cd electron_deskTop_app && npm i
```

### 本地跑起服务

```bash
$ npm run start
```

### 打包

打包给测试

```bash
$ npm run builder-test
```

打包 windows 版本

```bash
$ npm run win
```

打包 mac 版本

```bash
$ npm run mac
```

同时打包 windows 和 mac 版本

```bash
$ npm run builder
```

## License

MIT © [HUNLIJI](https://hunliji.com)
# electron-react
