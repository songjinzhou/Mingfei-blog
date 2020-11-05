module.exports = {
  title: '明非的博客',
  description: '一起学习🦆',
  lastUpdated: 'Last Updated',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebarDepth: 2,
    displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title: '一组题目',
        // collapsable: false,
        children: [
          ['/bar/four', '子目录']
        ]
      },
      {
        title: '二组题目',
        children: [
          ['/about', 'about自定义标题'],
          '/contact',
        ]
      }
    ]
  },
  plugins: ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }]
}