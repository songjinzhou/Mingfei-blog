module.exports = {
  title: '明非的博客',
  description: '一起学习🦆',
  // lastUpdated: 'Last Updated',
  themeConfig: {
    nav: [
      { text: '在线简历', link: '/' },
      { text: 'github', link: 'https://github.com/songjinzhou' },
    ],
    // sidebarDepth: 2,
    // displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title: '碎碎念',
        children: [
          ['/blog/Idea/one', '万事开头难'],
          ['/blog/Idea/two', '一篇鸡血'],
          ['/blog/Idea/three', 'IT人软技能'],
        ]
      },
      {
        title: 'React',
        children: [
          ['/blog/React/one', '基础api'],
          ['/blog/React/two', '基础api1']
        ]
      },
      {
        title: 'Redux系列',
        children: [
          ['/blog/Redux/one', 'Redux']
        ]
      },
      {
        title: 'Webpack',
        children: [
          ['/blog/Webpack/one', 'webpack'],
        ]
      },
      {
        title: '前端工程化',
        children: [
          ['/blog/FeProject/one', 'sonar代码检测平台'],
        ]
      },
      {
        title: '算法',
        children: [
          ['/blog/Leetcode/one', 'leetcode'],
        ]
      },
      {
        title: '性能优化',
        children: [
          ['/blog/Performance/one', '性能优化'],
        ]
      },
      {
        title: 'NodeJs',
        children: [
          ['/blog/NodeJs/one', 'NodeJs'],
        ]
      }
    ]
  },
  plugins: ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }]
}