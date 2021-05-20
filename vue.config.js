module.exports = {
    devServer: {
        proxy: {
            //URL, который он обрабатывает (здесь пишется регулярка)
            '^/api': {
                //перед ним ставится следующий URL
                target: 'http://localhost:9500',
                changeOrigin: true,
                secure: false,
                //здесь часть URL переписывается
                pathRewrite: {'^/api':'/mis'},
                logLevel: 'debug'
            }
        }
    }
}