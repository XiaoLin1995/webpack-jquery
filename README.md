# webpack-jquery

## 使用说明
- 下载依赖
```
$ npm install
```

- 启动服务
```
$ npm run serve
```

- 打包为生产代码
```
$ npm run build
```

## 特点
- 集成了 eslint, 规范代码
- 集成了 autoprefixer, 不用再写 css hack 了
- 集成了 babel, 可以写最新的 js 语法
- 整体架构相比传统 jq 开发, 更加模块化

## 适用人群
- jquery 钉子户
- 正准备从 jq 转向 vue, react, angular 的同学, 可借此过渡
- 准备学习 webpack 的同学, 可以参考本项目

## 目录结构说明
```
├── build                       # webpack 配置
├── helpers                     # handlebars helper
├── src                         # 开发目录
│   ├── assets                  # 静态资源目录
│   ├── pages                   # 页面目录
│   |    ├── index              # 页面名
│   |    |  ├── index.hbs       # 页面的 html
│   |    |  ├── index.js        # 页面 js
│   |    |  └── index.scss      # 页面样式
│   |    └── pageA               
│   |       ├── index.hbs       
│   |       ├── index.js        
│   |       └── index.scss      
│   ├── styles                  # 公用样式目录
│   ├── includes                # 公用部分
│   |  ├── header
│   |  |  ├── index.hbs
│   |  |  └── index.scss
│   |  └── footer
│   |     ├── index.hbs
│   |     └── index.scss
│   └── layouts                 # 页面布局
│   |  └── base                 # 基本布局
│   |     ├── index.hbs
│   |     └── index.scss
│   └── utils                   # 工具函数目录
└── vendors                     # 不能用 npm 管理的第三方包
```
