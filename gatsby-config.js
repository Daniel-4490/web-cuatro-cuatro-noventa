module.exports = {
  siteMetadata: {
    title: 'Cuatro Cuatro Noventa',
    description: 'En constante adaptación',
    author: 'Daniel Alarcón',
    siteUrl: 'https://cuatrocuatronoventa.com'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //  options: {
    //    trackingId: ',
    //  },
    // }
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    }
  ]
}
