module.exports={
    plugins:[
        require('autoprefixer')({
            browsers: ['last 2 versions']
        }),
        require('postcss-pxtorem')({
            /*
             rootValue,取决于设计稿是按照什么设备的尺寸来设计的，
             那这就是对应于为该尺寸媒体查询@media的那个html font-size值
             */
            rootValue: 100,
            unitPrecision: 5,//保留几位小数点
            //白名单
            // propWhiteList: [],
            /*
             希望哪些属性能从px转为rem,
             *表示所有的属性，!表示排除某个属性
             */
            propList: ['*', '!border-bottom', '!border-top', '!border-left', '!border-right'],
            // selectorBlackList: [],//
            // replace: true,
            /*
             在media中的px是否也进行转换:
             @media only screen and (min-width: 1080px)
             */
            // mediaQuery: false,
            // minPixelValue: 0
        })
    ]
}