var defaultMeta = {
  keywords: '明美五金',
  description: '江苏省丹阳市 明美五金是一款聚集了各领域原创内容的个性化资讯阅读产品,它覆盖了原创、体育、军事、科技、搞笑、健康、娱乐、时尚、汽车、财经、文学等领域优质内容。通过大数据和机器学习算法,为用户推荐私人定制的阅读内容。真正做到看热点,有的聊!'
}
var initMeta = function (metas) {
  var metaContent = ''
  if (metas) {
    for (var key in metas) {
      var metaItem = '<meta name="'
      var content = metas[key]
      metaItem = metaItem + key + '" content="'
      if (!content) {
        content = defaultMeta[key]
      }
      metaItem = metaItem + key + '" content="' + content + '"/>\n'
      metaContent = metaContent + metaItem
    }
  } else {
    metaContent = '<meta name="keywords" content="' + defaultMeta.keywords + '"/>\n' +
      '<meta name="description" content="' + defaultMeta.description + '"/>'
  }
  return metaContent
}

var linkItem = function (path) {
  return '<link href="' + path+ '" rel="stylesheet" type="text/css"/>'
}
var jsItem = function (path) {
  return '<link rel="prefetch" href="' + path + '" as="script">'
}
var initJsCss = function (pathname, jsStr) {
  var cssContent = ''
  var jsContent = ''
  /*if (jsStr && jsStr.length > 0) {
    jsStr = jsStr[0]
  }*/
  var jsContent = '<link rel="preload" href="" as="script">' +
                  '<link rel="preload" href="" as="script">' +
                  '<link rel="preload" href="" as="script">' +
                  '<link href="" as="script">'
  switch (true)
  {
    case pathname === '/' || pathname === '/index.html':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      cssContent = cssContent + linkItem('/dist/css/home.min.css')
      cssContent = cssContent + linkItem('/dist/css/n-arrivals.min.css')
      cssContent = cssContent + linkItem('/dist/css/h-s-area.min.css')
      break;
    case pathname === '/newmarket':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      cssContent = cssContent + linkItem('/dist/css/n-arrivals.min.css')
      cssContent = cssContent + linkItem('/dist/css/newmarket.min.css')
      break;
    case pathname === '/hotpro':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      cssContent = cssContent + linkItem('/dist/css/h-s-area.min.css')
      cssContent = cssContent + linkItem('/dist/css/newmarket.min.css')
      break;
    case pathname === '/serverExample':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      cssContent = cssContent + linkItem('/dist/css/serverExample.min.css')
      break;
    case pathname === '/connectUs':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      cssContent = cssContent + linkItem('/dist/css/connetUs.min.css')
      break;
    case pathname === '/search':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      break;
    case pathname === '/product':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      cssContent = cssContent + linkItem('/dist/css/product.min.css')
      break;
    case pathname === '/product/'+jsStr+'/':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      cssContent = cssContent + linkItem('/dist/css/product.min.css')
      break;
    case pathname === '/purchase':
      cssContent = cssContent + linkItem('/dist/css/common.min.css')
      break;
  }
  return {
    cssContent,
    jsContent
  }
}
module.exports = {
  initMeta,
  initJsCss
}
