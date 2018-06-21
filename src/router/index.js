import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter(){
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: resolve => require.ensure([], () => resolve(require('../components/home/home.vue')),'home')
      },
      {
        path: '/newMarket',
        component: resolve => require.ensure([], () => resolve(require('../components/newmarket/newmarket')),'newmarket')
      },
      {
        path: '/hotpro',
        component: resolve => require.ensure([], () => resolve(require('../components/hotpro/hotpro')),'hotpro')
      },
      {
        path: '/serverExample',
        component: resolve => require.ensure([], () => resolve(require('../components/serverExample/serverExample')),'serverExample')
      },
      {
        path: '/connectUs',
        component: resolve => require.ensure([], () => resolve(require('../components/connectUs/connectUs')),'connectUs')
      },
      {
        path: '/search',
        component: resolve => require.ensure([], () => resolve(require('../components/search/search')),'search')
      },
      /*{
        path: '/product',
        component: resolve => require.ensure([], () => resolve(require('../components/product/product')),'product')
      },*/
      {
        path: '/product/:id/',
        component: resolve => require.ensure([], () => resolve(require('../components/product/product')),'product')
      },
      {
        path: '/purchase',
        component: resolve => require.ensure([], () => resolve(require('../components/purchase/purchase')),'purchase'),
        children:[
          {
            path: ':id',
            component: resolve => require.ensure([], () => resolve(require('../base/personInfor/personInfor')),'personInfor'),
          }
        ]
      }
    ]
  })
}
