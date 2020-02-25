module.exports = {
  title: 'Datopian Technical Docs',
  description: 'All our technical documentation in one place',
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [2, 3, 4]
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig: {
    repo: 'https://gitlab.com/datopian/tech/tech.datopian.com',
    repoLabel: 'Contribute!',
    editLinks: true,
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Features',
        items: [
          { text: 'Views', link: '/views/' }
        ]
      }
    ]
  },
  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        ga: "UA-157796850-2" 
      }
    ]
  ]
}
