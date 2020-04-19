export function sortByKey (key) {
  return function (a, b) {
    let value1 = a[key]
    let value2 = b[key]
    return value1 - value2
  }
}

export function IsPC () {
  var userAgentInfo = navigator.userAgent
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

var beforeScrollTop = 0
var afterScrollTop = 0
export function getScrollDirection () {
  /*
   * 判断滚动条滚动方向
   */
  afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (beforeScrollTop > afterScrollTop) {
    // 向上
    beforeScrollTop = afterScrollTop
    return 'up'
  } else {
    // 向下
    beforeScrollTop = afterScrollTop
    return 'down'
  }
}
