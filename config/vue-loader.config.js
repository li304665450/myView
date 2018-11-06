module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev, // 把.vue文件中的css同一打包到.css文件中
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5] ',
      camelCase: true
    }
    // hotReload: isDev,
  }
}
