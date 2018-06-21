/**
 * Created by pc on 2017/5/3.
 */
import api from '../http/post/App-list'
import * as types from './mutations-types'
export const FETCH_BANNER_PIC = ({commit},params={}) => {
  return api.getAppList(params, data => {
    commit(types.SET_HEAD_BANNER, {result:data})
  })
}
export const FETCH_PRODUCT_RCO = ({commit},params={}) => {
  return api.getRecommendProductList(params, data => {
    commit(types.SET_THREE_RECOMMEND, {result: data})
  })
}
export const FETCH_NEWPRODUCT_RCO = ({commit},params={}) => {
  return api.getNewProductList(params, data => {
    commit(types.SET_NEW_PRODUCT, {result:data})
  })
}
export const FETCH_HOTSELL_RCO = ({commit},params={}) => {
  return api.getNewProductList(params, data => {
    commit(types.SET_HOT_SELL, {result:data})
  })
}
export const FETCH_BESTPRO_RCO = ({commit},params={}) => {
  return api.getNewProductList(params, data => {
    commit(types.SET_BEST_PRO, {result:data})
  })
}
export const FETCH_SERVER_RCO = ({commit},params={}) => {
  return api.getNewProductList(params, data => {
    commit(types.SET_SERVER_PRO, {result:data})
  })
}
export const FETCH_SEARCH_DATA = ({commit},params={}) => {
  return api.getSearchProductList(params, data => {
    commit(types.SET_SEARCH_DATA, {result:data})
  })
}
export const FETCH_PRODUCT_SINGLE = ({commit},params={}) => {
  return api.getFetchProductSingle(params, data => {
    commit(types.SET_PRODUCT_SINGLE, {result:data})
  })
}
export const FETCH_ADDSHOP = ({commit},params={}) => {
  console.log(params)
  return api.getFetchAddShop(params, data => {
    commit(types.SET_ADDSHOP_DATA, {result:data})
  })
}
export const GET_SHOPCAR = ({commit},params={}) => {
  return api.getShopCar(params, data => {
    commit(types.SET_GET_SHOPCAR, {result:data})
  })
}
export const FETCH_REDUCENUM = ({commit},params={}) => {
  return api.getGoodsReduceNum(params, data => {
    commit(types.GOODS_REDUCE_LIST, {result:data})
  })
}
export const FETCH_ADDNUM = ({commit},params={}) => {
  return api.getGoodsAddNum(params, data => {
    commit(types.GOODS_ADD_LIST, {result:data})
  })
}
export const POST_PERSONINFO = ({commit},params={}) => {
  return api.postPersonInfo(params, data => {
    commit(types.POST_PERSON_INFO, {result:data})
  })
}
export const POST_SUBMIT_ORDER = ({commit},params={}) => {
  return api.postSubmitOrder(params, data => {
    commit(types.POST_SUBMITORDER, {result:data})
  })
}
export const GET_PERSONINFO = ({commit},params={}) => {
  return api.getPersonInfo(params, data => {
    commit(types.GET_PERSON_INFO, {result:data})
  })
}
export  const FETCH_RECOMMAND = ({commit},params={}) => {
  return api.getRecommandInfo(params, data => {
    commit(types.GET_RECOMMAND_INFO,{result:data})
  })
}
