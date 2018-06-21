/**
 * Created by pc on 2017/5/5.
 */
function getMeta (vm) {
  const { meta } = vm.$options
  if (meta) {
    return typeof meta === 'function'
      ? meta.call(vm)
      : meta
  }
}

const serverMetaMixin = {
  created () {
    const meta = getMeta(this)
    if (meta) {
      this.$root.$options.ssrContext.meta = `${meta}`
    }
  }
}

const clientMetaMixin = {
  mounted () {
    const meta = getMeta(this)
    if (meta) {
      var oMeta = document.createElement('meta');
      oMeta.name = meta.name
      oMeta.content = meta.content
      let metaObj = document.getElementsByName(meta.name)
      if(metaObj && metaObj.length>0) {
        return;
      } else {
      document.getElementsByTagName('head')[0].appendChild(oMeta);
      }
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverMetaMixin
  : clientMetaMixin
