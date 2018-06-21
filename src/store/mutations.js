/**
 * Created by pc on 2017/5/3.
 */
import Vue from  'vue'
import * as types from './mutations-types'
import {delCookie} from '../util/cookie.js'
const mutations = {
  [types.SET_HEAD_BANNER](state, pics) {
    let ht = state.picurl
    console.log(pics.result)
    let a =ht + pics.result.data[0].pic.substring(1)
    state.pics = a
  },
  [types.SET_THREE_RECOMMEND](state, res) {
    let ht = state.picurl
    let a =ht + res.result.data[0].pic.substring(1)
    for(let i in res.result.data){
      a =ht + res.result.data[i].pic.substring(1)
      res.result.data[i].pic = a
    }
    state.res = res.result.data
  },
  [types.SET_NEW_PRODUCT] (state, res) {
    let ht = state.picurl
    let a = ht + res.result.data[0].pic.substring(1)
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      res.result.data[i].pic = a
    }
    state.pro = res.result.data.splice(0,3)
    state.prolist = res.result.data
    state.picbanner =ht + res.result.data1[0].bannerPic.substring(1)
  },
  [types.SET_HOT_SELL] (state, res) {
    let ht = state.picurl
    let a = ht + res.result.data[0].pic.substring(1)
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      res.result.data[i].pic = a
    }
    state.hotList = res.result.data.splice(0,2)
    state.hotListre = res.result.data
    state.hotadv =ht + res.result.data1[0].bannerPic.substring(1)
  },
  [types.SET_BEST_PRO] (state, res) {
    let ht = state.picurl
    let a = ht + res.result.data[0].pic.substring(1)
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      res.result.data[i].pic = a
    }
    state.bestData = res.result.data.splice(0,4)
    state.bestPro =ht + res.result.data1[0].bannerPic.substring(1)
  },
  [types.SET_SERVER_PRO] (state, res) {
    let ht = state.picurl
    let a = ht + res.result.data[0].pic.substring(1)
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      res.result.data[i].pic = a
    }
    state.serverList = res.result.data
  },
  [types.SET_SEARCH_DATA] (state, res) {
    let ht = state.picurl
    let a = ht + res.result.data[0].pic.substring(1)
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      res.result.data[i].pic = a
    }
    state.searchList = res.result.data
  },
  [types.SET_PRODUCT_SINGLE] (state, res) {
    let ht = state.picurl
    let a = ht + res.result.data[0].pic.substring(1)
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      res.result.data[i].pic = a
    }
    for (let j in res.result.data[0].prodetialpic) {
      var b = ht + res.result.data[0].prodetialpic[j].substring(1)
      console.log('======================================================')
      console.log(b)
      console.log('======================================================')
      res.result.data[0].prodetialpic[j] = b
    }
    state.productSingle.singerPro= res.result.data
    state.productSingle.list = res.result.data[0].prodetialpic
  },
  [types.SET_ADDSHOP_DATA] (state, res) {
    let ht = state.picurl
    if(!res.result.data){
      return false
    }
    let a = ht + res.result.data[0].pic.substring(1)
    let addall = 0
    let sumnum = 0
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      let sumPrice = res.result.data[i].price * res.result.data[i].num
      let num = parseInt(res.result.data[i].num)
      let sumP = res.result.data[i].price

      res.result.data[i].pic = a
      addall += sumPrice
      sumnum += num
      res.result.data[i].sum = sumPrice
    }
    state.shopCarList.allSum = addall
    state.shopCarList.sumNum = sumnum
    state.shopCarList.list = res.result.data
  },
  [types.SET_GET_SHOPCAR] (state, res) {
    let ht = state.picurl
    if(!res.result.data){
      return false
    }
    let a = ht + res.result.data[0].pic.substring(1)
    let addall = 0
    let sumnum = 0
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      let sumPrice = res.result.data[i].price * res.result.data[i].num
      let num = parseInt(res.result.data[i].num)
      let sumP = res.result.data[i].price

      res.result.data[i].pic = a
      addall += sumPrice
      sumnum += num
      res.result.data[i].sum = sumPrice
    }
    state.shopCarList.allSum = addall
    state.shopCarList.sumNum = sumnum
    state.shopCarList.list = res.result.data
  },
  [types.GOODS_REDUCE_LIST] (state, res) {
    let ht = state.picurl
    if(!res.result.data){
      return false
    }
    let a = ht + res.result.data[0].pic.substring(1)
    let addall = 0
    let sumnum = 0
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      let sumPrice = res.result.data[i].price * res.result.data[i].num
      let num = parseInt(res.result.data[i].num)
      let sumP = res.result.data[i].price

      res.result.data[i].pic = a
      addall += sumPrice
      sumnum += num
      res.result.data[i].sum = sumPrice
    }
    console.log('--------------------------------------------sum')
    console.log(sumnum)
    console.log('--------------------------------------------sum')
    state.shopCarList.allSum = addall
    state.shopCarList.sumNum = sumnum
    state.shopCarList.list = res.result.data
  },
  [types.GOODS_ADD_LIST] (state, res) {
    let ht = state.picurl
    if(!res.result.data){
      return false
    }
    let a = ht + res.result.data[0].pic.substring(1)
    let addall = 0
    let sumnum = 0
    for (let i in res.result.data) {
      a = ht + res.result.data[i].pic.substring(1)
      let sumPrice = res.result.data[i].price * res.result.data[i].num
      let num = parseInt(res.result.data[i].num)
      let sumP = res.result.data[i].price

      res.result.data[i].pic = a
      addall += sumPrice
      sumnum += num
      res.result.data[i].sum = sumPrice
    }
    state.shopCarList.allSum = addall
    state.shopCarList.sumNum = sumnum
    state.shopCarList.list = res.result.data
  },
  [types.POST_PERSON_INFO] (state, res) {
    state.personInfo.boolt = 'false'
    state.personInfo.boolf = 'true'
    state.personInfo.title = res.result.data.name
    state.personInfo.tel = res.result.data.tel
    state.personInfo.address = res.result.data.address
  },
  [types.POST_SUBMITORDER] (state,res) {
    state.postSubmitOrder = res.result
    if (state.postSubmitOrder.code == '0'){
      delCookie('userId')
      location.href='/'
    }
  },
  [types.GET_PERSON_INFO](state,res){
    if (res.result.code == '0'){
      state.personInfo.boolt = 'false'
      state.personInfo.boolf = 'true'
      state.personInfo.title = res.result.data[0].name
      state.personInfo.tel = res.result.data[0].tel
      state.personInfo.address = res.result.data[0].address
    } else {
      state.personInfo.boolt = 'true'
      state.personInfo.boolf = 'false'
    }
  },
  [types.GET_RECOMMAND_INFO](state,res){
    console.log('-----------------------------------------------------------')
    let a = state.picurl + res.result.data[0].pic.substring(1)
    for (let i in res.result.data) {
      a = state.picurl + res.result.data[i].pic.substring(1)
      res.result.data[i].pic = a
    }
    state.recommandList = res.result.data
    console.log('-----------------------------------------------------------')
  }
}
export default mutations
