module.exports = {
    devServer:{
        proxy:{
            '/tokens':
            {target:'http://kumanxuan1.f3322.net:8084'}
        }
    }
}   