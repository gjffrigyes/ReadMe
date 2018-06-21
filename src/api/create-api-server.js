import LRU from 'lru-cache'
const APP_ROOT = 'http://devapi.donews.com'
const prefix = APP_ROOT + '/v/0.1/'
export function createAPI () {
  let api
  if (process.__API__) {
    api = process.__API__
  } else {
    api = process.__API__ = {
      api: prefix,
      port: 8080,
      timeout: 30000,
      cached: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      cachedItem: {}
    }
  }
  return api
}
