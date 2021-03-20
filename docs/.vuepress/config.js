module.exports = {
  title: '明非的博客',
  description: '一起学习🦆',
  base: '/',
  // lastUpdated: 'Last Updated',
  themeConfig: {
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
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
      // {
      //   title: 'React',
      //   children: [
      //     ['/blog/React/one', '基础api'],
      //     ['/blog/React/two', '基础api1']
      //   ]
      // },
      // {
      //   title: 'Redux系列',
      //   children: [
      //     ['/blog/Redux/one', 'Redux']
      //   ]
      // },
      // {
      //   title: 'Webpack',
      //   children: [
      //     ['/blog/Webpack/one', 'webpack'],
      //   ]
      // },
      // {
      //   title: '前端工程化',
      //   children: [
      //     ['/blog/FeProject/one', 'sonar代码检测平台'],
      //   ]
      // },
      {
        title: '初级算法',
        children: [
          ['/blog/Leetcode/array', '数组'],
          ['/blog/Leetcode/string', '字符串'],
          ['/blog/Leetcode/chainTable', '链表'],
          ['/blog/Leetcode/tree', '树'],
          ['/blog/Leetcode/sort', '排序和搜索'],
          ['/blog/Leetcode/dynamicPlanning', '动态规划'],
          ['/blog/Leetcode/design', '设计问题'],
          ['/blog/Leetcode/math', '数学'],
          ['/blog/Leetcode/other', '其他'],
        ]
      },
      // {
      //   title: '性能优化',
      //   children: [
      //     ['/blog/Performance/one', '性能优化'],
      //   ]
      // },
      // {
      //   title: 'NodeJs',
      //   children: [
      //     ['/blog/NodeJs/one', 'NodeJs'],
      //   ]
      // }
    ]
  },
  plugins: ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }]
}