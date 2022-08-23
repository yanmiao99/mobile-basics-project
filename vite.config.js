import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from 'unplugin-vue-components/resolvers';
import pxToViewPort from "postcss-px-to-viewport"
import getLocalIp from "./src/utils/getLocalIp"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(
            {
                refTransform: true, // 配置可使用 $ref 进行定义变量
                reactivityTransform: true
            }
        ),
        Components({
            resolvers: [VantResolver(
                {
                    // 只配置这两项也能正常使用
                    unitToConvert: 'px', // 要转化的单位
                    viewportWidth: 375, // UI设计稿的宽度

                    // 额外配置
                    unitPrecision: 6, // 转换后的精度，即小数点位数
                    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
                    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
                    selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
                    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                    mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
                    replace: true, // 是否转换后直接更换属性值
                    exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
                    landscape: true, // 是否处理横屏情况
                    landscapeUnit: 'vw', // (String) 横屏时使用的单位
                    landscapeWidth: '1334' // (Number) 横屏时使用的视口宽度
                }
            )],
        }),
    ],
    css: {
        postcss: {
            plugins: [
                pxToViewPort()
            ]
        }
    },
    base: './', //打包相对路径
    server: {
        host: getLocalIp,	// 本机的局域网IP
        port: 2333, //指定端口号
        proxy: {
            // '/user': {
            //     target: "http://127.0.0.1:3000/"  // 跨域配置
            // }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
