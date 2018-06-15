module.exports = {
  // if https://xxx.com/sub-path, config here
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://asset.raoul1996.cn/' : '',
  // default is dist dir
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
    // entry-only string config should see here: https://cli.vuejs.org/config/#pages
  },
  // if install eslint, will lint your code when you save it.
  lintOnSave: true,
  // loading the compiler to allow developer use template string like: '<div>something</div>'
  runtimeCompiler: true,
  // use babel to compiler the lib inside node_modules
  transpileDependencies: [],
  // generate the map file
  productionSourceMap: true,
  parallel: require('os').cpus().length > 1,
  // pwa: {
  //   name: 'My App',
  //   themeColor: '#4DBA87',
  //   msTileColor: '#000000',
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',
  //
  //   // configure the workbox plugin
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     // swSrc is required in InjectManifest mode.
  //     swSrc: 'dev/sw.js',
  //     // ...other Workbox options...
  //   }
  // },
  // devServer config
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://api.raoul1996.cn',
        ws: false,
        changeOrigin: true
      }
    }
  }
}
