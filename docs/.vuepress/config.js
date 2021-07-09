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
    searchMaxSuggestions: 10,
    logo: '/MagicSquare.svg',
    nav: [
      {
        text: 'Anubis',
        link: '/anubis/'
      },
      {
        text: 'Timelord',
        link: '/timelord/'
      },
      {
        text: 'Overlord',
        link: '/overlord/'
      },
      {
        text: 'RubberHose 2',
        link: '/rubberhose2/',
      },
      {
        text: 'Freebies',
        link: '/freebies/',
      },
    ],
    sidebar: {
      '/freebies/': [
        {
          title: 'Freebies',
          collapsable: false,
          children: [
            '',
            'buttcapper',
            'hylian',
            'beatgrid',
            'soupcan',
          ],
        }
      ],
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
            'troubleshoot',
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
            'training',
            'open-source',
            'changelog',
          ]
        },  
      ],
      '/anubis/': [
        {
          title: 'Anubis',
          collapsable: false,
          children: [
            '',
            // 'workflow',
            // 'transfer',
            // 'frame-tools',
            // 'settings',
            'workflow',
            'color-accuracy',
            'open-source',
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
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-65174006-1' // UA-00000000-0
    }
  }
}
