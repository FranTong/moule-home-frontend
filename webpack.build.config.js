/**
 * Created by MOUle on 2017/10/20.
 */
/**
 * Created by MOUle on 2017/10/9.
 */
var path = require("path");
const webpack = require("webpack");
const HtmlWebpackPligin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//加载器
var rules = [
    {
        test:/\.html$/,
        loader:'html-loader',
        options: {
         minimize: false,
         removeComments: true,
         collapseWhitespace: true
         }
    },
    {
        test:/\.js$/,
        loader:'babel-loader',
        include:path.resolve(__dirname,'src'),
        exclude:path.resolve(__dirname,'node_modules'),
        query:{
            presets:['eslatest-node6','es2015']
        }
    },
    {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({               //分离CSS
            fallback:"style-loader",
            use:[
                {
                    loader:'css-loader',
                    options:{
                        minimize:true                 //css压缩
                    }
                },
                {
                    loader:"postcss-loader"
                },
                {
                    loader:"less-loader"
                }
            ]
        })
    },
    {
        test:/\.less$/,
        use:ExtractTextPlugin.extract({       //分离CSS
            fallback:"style-loader",
            use:[
                {
                    loader:'css-loader',
                    options:{
                        minimize:true             //css压缩
                    }
                },
                {
                    loader:"postcss-loader"
                },
                {
                    loader:"less-loader"
                }
            ]
        })
    },
    {
        test:/\.(png|jpg|gif)$/,
        use:[
            {
                loader:'file-loader',
                options:{
                    limit:8192,
                    name:'images/[name].[ext]'
                }
            }
        ]
    },
    //字体loader
    {
        test:/\.(eot|woff|woff2|ttf|svg)$/,
        loader:'url-loader',
    },
];

var plugins = [
    new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "window.jQuery":"jquery"
    }),
    new ExtractTextPlugin("css/[name]-[chunkhash:8].css",{allChunks:false}), //css样式分离
    new webpack.optimize.CommonsChunkPlugin({
        name:'commons',
        minChunks:2,
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings:false
        }
    })
];

var glob = require('glob');
//获取指定路径下的入口文件
function getEntries(globPath){
    var files = glob.sync(globPath),
        entries = {};

    files.forEach(function(filepath){
        //取倒数第二层（view下面的文件夹）做包名
        var split = filepath.split('/');
        var name = split[split.length - 2];
        var names = split[split.length - 3];
        /*entries[names+'/'+name] = './'+filepath;*/  /*二级目录*/
        entries[names] = './'+filepath;      /*一级目录*/
    });
    return entries;
}

//入口js
var entries = getEntries('src/pages/**/index.js');
var  webpackConfig = {
    devtool:'inline-source-map',
    entry:{  },
    output :{
        path :__dirname + "/build",
        filename : "js/[name].bundle-[chunkhash:8].js"
    },
    module:{
        rules:rules
    },
    plugins:plugins,
};
Object.keys(entries).forEach(function(name){
    //每一个页面生成一个entry，
    webpackConfig.entry[name] = entries[name];
    //每一页面生成一个html
    console.log('上线环境页面')
    console.log(name)
    console.log('上线环境页面')

    //判断是否是登陆页面
    if(name == 'login/login'){
        var plugin = new HtmlWebpackPligin({
            //生成出来的html文件名
            //filename:name + '.html',
            filename:'login.html',
            //每个html的模板，这里多个页面使用一个模板
            template:'./src/login.html',
            inject:'body',
            chunks:['commons',name]                      //单独打包当前页面的块
        });
    }else{
        var plugin = new HtmlWebpackPligin({
            //生成出来的html文件名
            filename:name + '.html',
            //每个html的模板，这里多个页面使用一个模板
            template:'./src/index.tmpl.html',
            inject:'body',
            chunks:['commons',name]                      //单独打包当前页面的块
        });
    }
    plugins.push(plugin)
})

module.exports = webpackConfig;