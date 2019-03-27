const path=require('path'); //nodejs的语法，引入路径模块，为了输出的时候找绝对路径
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: __dirname + "/app/main.js",//唯一入口文件__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
    output: {
        // 这里有两种写法
        // path:__dirname + '/public',//打包后的文件存放的地方
        path:path.resolve(__dirname,'dist'),    //path.resolve为nodejs的固定语法，用于找到当前文件的绝对路径
        filename:'js/bundle.js'//打包后输出文件的文件名
    },
    devServer: {
        contentBase:"./",//本地服务器所加载的页面所在的目录
        historyApiFallback:true,//不跳转
        hot:true,//实现热加载         
        port:8080,//设置端口 
        inline:true//试试刷新
    },
    
    mode: 'development', // 设置mode
    //安装自动生成html的插件
    plugins:[
        //初始化html插件
        new htmlWebpackPlugin({
            template:'./index.html',//指定生成html的模板
            filename:'index.html',//编译好的文件名
            inject:'body'//将脚本js放在哪个标签内
        })
    ]

}