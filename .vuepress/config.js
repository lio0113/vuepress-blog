module.exports = {
  "title": "",
  "description": "",
  "dest": "public",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'reco_luan' }],
    ['meta', { name: 'keywords', content: 'vuepress,reco,reco_luan,vuepress-reco,vuepress-theme-reco,theme,blog,主题' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon_vuepress_reco.png' }],
    ['link', { rel: 'mask-icon', href: '/icon_vuepress_reco.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon_vuepress_reco.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  theme: 'reco',
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017",
    subSidebar: 'auto',
    sidebar: {
      '/blogs/note/': [
        {
          title: 'HTML5',
          collapsable: true,
          children: [
            'html5/HTML5的语义元素',
            'html5/HTML5多媒体标签',
            'html5/HTML5表单元素',
            'html5/HTML5中的API',
            'html5/Canvas'
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          children: [
            'css/css3新特性',
            'css/css3Flip'
          ]
        },
        {
          title: 'JS',
          collapsable: true,
          children: [
            'js/js数据类型',
            'js/js对象',
            'js/js继承',
            'js/js原型链、闭包',
            'js/js函数的四种调用方式'
          ]
        }
      ]
    }
  },
  "markdown": {
    "lineNumbers": true
  }
}