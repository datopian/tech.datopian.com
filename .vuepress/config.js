module.exports = {
  title: 'Datopian Tech',
  description: 'An overview of our technology',
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
    lastUpdated: 'Modified',
    editLinks: true,
    algolia: {
      apiKey: '8a3294a79d914a3ae946190f9ce08fb7',
      indexName: 'datopian_tech'
    },
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
    'vuepress-plugin-mermaidjs',
    [
      "@vuepress/plugin-google-analytics",
      {
        ga: "UA-157796850-2" 
      }
    ]
  ]
}
