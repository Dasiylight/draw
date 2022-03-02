module.exports = {
  publicPath:'./',
  devServer:{
    proxy: {
      '/api': {    //将www.exaple.com印射为/apis
          target: 'http://192.168.1.20:8866/',  // 接口域名
          changeOrigin: true,  //是否跨域
          pathRewrite: {
              '^/api': ''   //需要rewrite的,
          }              
      }
  }
}
  // publicPath: process.env.NODE_ENV === "production" ? "/page/" : "./"
 };