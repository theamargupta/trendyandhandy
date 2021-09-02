const description =
  'Shop for electronics, apparels & more using our Trendy&Handy app Free shipping & COD.'
const title = 'Trendy&Handy'
const url = 'https://www.trendyandhandy.org/'

const seo = {
  title,
  titleTemplate: '%s | Popit',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  // twitter: {
  //   handle: '@GraphCMS',
  //   site: '@GraphCMS'
  // }
}

export { seo as defaultSeo, url as defaultUrl }
