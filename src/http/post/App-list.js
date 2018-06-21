import { purChaseAPI as purChaseApi } from '../api'
import { sendPost,fetch } from '../index'
export default {
  getAppList (params, fn) {
    return sendPost(purChaseApi.purChaseInterface, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getRecommendProductList (params, fn) {
    return sendPost(purChaseApi.procudtThreeRcommend, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getNewProductList (params, fn) {
    return sendPost(purChaseApi.newproduct, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getSearchProductList (params, fn) {
    return sendPost(purChaseApi.searchproduct, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getFetchProductSingle (params, fn) {
    return sendPost(purChaseApi.productSingle, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getFetchAddShop (params, fn) {
    return sendPost(purChaseApi.getFetchAddShop, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getShopCar (params, fn) {
    return sendPost(purChaseApi.getShopCar, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getGoodsReduceNum (params, fn) {
    return sendPost(purChaseApi.getReduceGoodsNum, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getGoodsAddNum (params, fn) {
    return sendPost(purChaseApi.getAddGoodsNum, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  postPersonInfo (params, fn) {
    return sendPost(purChaseApi.postPersonInfo, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  postSubmitOrder (params, fn) {
    return sendPost(purChaseApi.postSubmitOrder, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getPersonInfo(params, fn) {
    return sendPost(purChaseApi.getPersonInfo, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  },
  getRecommandInfo(params, fn) {
    return sendPost(purChaseApi.getRecommandList, params)
      .then((res) => {
        fn(res)
      }).catch((err) => {
        fn(err)
      })
  }
}
