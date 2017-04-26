var Webpack = require("webpack");



module.exports ={
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],

    externals : {
        //makes the jQuery library available
        jquery : 'jQuery'

    },

    plugins : [
        new Webpack.ProvidePlugin({
            //allows you to not have to require jquery in every file 
            //when webpack sees any of the below characters, it will include the jquery module
            '$' : 'jquery',
            'jQuery': 'jquery'
        })
    ],

    output:{
        path: __dirname,
        filename:"./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            Form : 'app/components/Form.jsx',
            Message: 'app/components/Message.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            applicationStyles: 'app/styles/app.css'
        },
        extensions: ["",".js",".jsx"]
    },
    module:{
        loaders:[
            {
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};