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

## 开发

![based on](https://qnm.hunliji.com/o_1cl19jl4ljle1p4loot1di1k1jm.png?imageView2/2/w/1920/h/1920/format/webp)

### 本地开发

克隆仓库

```bash
https://github.com/YoFoon/electron-react.git
```

安装依赖模块

```bash
$ cd electron-react && npm i
```

### 本地跑起服务

```bash
$ npm run start
```

### 打包

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
