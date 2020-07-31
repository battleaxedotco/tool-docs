const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Battle Axe',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  port: 9090,
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    logo: '/MagicSquare.svg',
    nav: [
      {
        text: 'RubberHose',
        link: '/rubberhose2/',
      },
      {
        text: 'Overlord',
        link: '/overlord/'
      },
      // {
      //   text: 'Timelord',
      //   link: '/timelord/'
      // },
    ],
    sidebar: {
      '/rubberhose2/': [
        {
          title: 'RubberHose2',
          collapsable: false,
          children: [
            '',
            'build',
            'style',
            'manage',
            'controls',
            'tutorials',
            'addons',
            'changelog',
          ],
        }
      ],
      '/overlord/': [
        {
          title: 'Overlord',
          collapsable: false,
          children: [
            '',
            'push-pull',
            'modifiers',
            'gradients',
            'update-shapes',
            'bonus',
            'tutorials',
            'changelog',
          ]
        }
      ],
      '/timelord/': [
        {
          title: 'Timelord',
          collapsable: false,
          children: [
            '',
            'workflow',
            'transfer',
            'frame-tools',
            'settings',
            'changelog',
          ]
        },  
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    // '@vuepress/plugin-back-to-top',
    '@vuepress/medium-zoom': {
      selector: '.zoom',
      options: {
        margin: 16
      }
    }
  }
}
