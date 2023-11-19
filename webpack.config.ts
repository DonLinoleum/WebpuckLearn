import  path from 'path'
import  htmlPlugin from 'html-webpack-plugin'
require('dotenv').config()
import  webpack from 'webpack'

type Mode = "production" | "development"
interface EnvVariables{
    mode:Mode
}

    export default (env:EnvVariables) => {
    const config: webpack.Configuration = {
    mode: env.mode,   
    entry: path.resolve(__dirname,'./src/index.ts'),
    output:{
        path: path.resolve(__dirname,"build"),
        filename: '[name].[contenthash].js',
        clean:true
    },
    plugins:[
        new htmlPlugin({template:path.resolve(__dirname,"public/index.html")}),
        new webpack.ProgressPlugin()
    ],
    module:{
        rules:[
                {
                    test:/\.tsx?$/,
                    use:'ts-loader',
                    exclude:/node_modules/
                }
        ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    }
}
    return config    
}


