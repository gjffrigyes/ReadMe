//获取cookie、

const setCookie = (name, value, Days) => {
  // var Days=1
  let random = Math.random()*1000
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + parseInt(random) + '; expires=' + exp.toGMTString() + '; path=/'
  // console.log(document.cookie)
}
const getCookie = (c_name) => { // 获取指定名称的cookie的值
  if (document.cookie.length>0)
  {
    var c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1
      var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1)
        c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ""
}
const delCookie = (name) => {
  setCookie(name, '', -1)
}

module.exports = {
  setCookie,
  getCookie,
  delCookie
}
