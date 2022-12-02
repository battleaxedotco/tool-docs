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
    ['meta', { name: 'theme-color', content: '#fff' }],
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
    logo: '/LogoType.svg',
    nav: [
      {
        text: 'Tools',
        items: [
          {
            text: 'Overlord',
            link: '/overlord/'
          },
          {
            text: 'Anubis',
            link: '/anubis/'
          },
          {
            text: 'Timelord',
            link: '/timelord/'
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
      },
      {
        text: 'Licenses',
        link: 'https://license.battleaxe.co'
      },
      // {
      //   text: 'Community',
      //   link: 'https://00-00.co'
      // },
      {
        text: 'Contact',
        link: '/contact/'
      },
    ],
    sidebar: {
      '/freebies/': [
        {
          title: 'Freebies',
          collapsable: false,
          children: [
            // '',
            'kbar-icons',
            'buttcapper',
            'schmeeer',
            'hylian',
            'beatgrid',
            'soupcan',
            'sammich',
          ],
        }
      ],
      '/rubberhose2/': [
        {
          title: 'RubberHose2',
          collapsable: false,
          children: [
            '',
            'workflow',
            'style',
            'manage',
            'controls',
            'tutorials',
            'addons',
            'troubleshooting',
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
            'workflow',
            'modifiers',
            'gradients',
            'update-shapes',
            'color-accuracy',
            'bonus',
            'tutorials',
            'troubleshooting',
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
            'troubleshooting',
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
            'workflow',
            'naming-tokens',
            'custom-quality',
            'export-preset-premiere',
            'color-accuracy',
            'open-source',
            'troubleshooting',
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
    },
    "vuepress-plugin-code-copy": {

    }
  }
}
