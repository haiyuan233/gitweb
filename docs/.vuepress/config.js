// const nav =require('./config/nav.js') ;
const sidebar =require('./config/sidebar.js');
module.exports = {
    title: 'Kuso Game的搬运工',
    description: 'Is this the only destiny afforded them? What truth will they find at the end of their paths?',
    host: '0.0.0.0',
    port: '8080',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
    ],
    theme: 'reco',
    themeConfig: {
        // nav,
        sidebar,
        sidebarDepth: 2,
        // docsRepo: 'MaLunan/press',
        // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        // docsBranch: 'dev-mln',
        author: '海原',
        type: 'blog',
        mode: 'light',
        modePicker: false,
        authorAvatar: '/avatar.jpg',
        record: '黑ICP备20003393号',
        recordLink: 'http://beian.miit.gov.cn/',
        // 项目开始时间，只填写年份
        startYear: '2020',
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/haiyuan233' },
                { icon: 'reco-mayun', link: 'https://gitee.com/haiyuan233' },
                { icon: 'reco-bilibili', link: 'https://space.bilibili.com/3054742' },
                { icon: 'reco-twitter', link: 'https://twitter.com/zhy64445032' }
            ]
        }
    },
    plugins:
        {
            '@vuepress-reco/vuepress-plugin-bgm-player':  // BGM播放器
                {
                    // 调试
                    // audios: [
                    //     {name: 'Felis',artist: 'M2U (엠투유)',url: '/music/Felis.mp3',cover: 'https://wiki.arcaea.cn/images/thumb/4/4b/Songs_felis.jpg/75px-Songs_felis.jpg'},
                    //     {name: 'Grievous Lady',artist: 'Various Artists&Laur',url: '/music/GrievousLady.mp3',cover: 'https://wiki.arcaea.cn/images/thumb/7/7b/Songs_grievouslady.jpg/75px-Songs_grievouslady.jpg'},
                    //     {name: 'Tempestissimo',artist: 't+pazolite',url: '/music/Tempestissimo.mp3',cover: 'https://wiki.arcaea.cn/images/thumb/c/c8/Songs_tempestissimo.jpg/75px-Songs_tempestissimo.jpg'},
                    // ],
                    // 生产环境
                    audios: [
                        {name: 'Felis',artist: 'M2U (엠투유)',url: 'http://source.wadanoharasp.com/Felis.mp3',cover: 'https://wiki.arcaea.cn/images/thumb/4/4b/Songs_felis.jpg/75px-Songs_felis.jpg'},
                        {name: 'Grievous Lady',artist: 'Various Artists&Laur',url: 'http://source.wadanoharasp.com/GrievousLady.mp3',cover: 'https://wiki.arcaea.cn/images/thumb/7/7b/Songs_grievouslady.jpg/75px-Songs_grievouslady.jpg'},
                        {name: 'Tempestissimo',artist: 't+pazolite',url: 'http://source.wadanoharasp.com/Tempestissimo.mp3',cover: 'https://wiki.arcaea.cn/images/thumb/c/c8/Songs_tempestissimo.jpg/75px-Songs_tempestissimo.jpg'},
                    ],

                },
            'cursor-effects': {
                size: 2,                    // size of the particle, default: 2
                shape: ['star'],              // shape of the particle, default: 'star'
                zIndex: 999999999           // z-index property of the canvas, default: 999999999
            }
        }
}
