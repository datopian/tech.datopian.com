module.exports = {
  title: 'Datopian Technical Docs',
  description: 'All our technical documentation in one place',
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [1, 2, 3]
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },
  themeConfig: {
    repo: 'https://gitlab.com/datopian/tech/kb',
    repoLabel: 'Contribute!',
    editLinks: true,
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboards', link: '/dashboards/'},
      { text: 'FAQ', link: '/faq/' }
    ]
  }
}
