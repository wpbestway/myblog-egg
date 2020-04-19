import Vue from 'vue'

Vue.filter('timeFormat', function (value, formatText) {
  let format = formatText || 'yyyy-MM-dd hh:mm:ss'
  let timestamp = new Date(value)
  if (value.length === 13) {
    timestamp = new Date(parseInt(value))
  }
  if (/yyyy/.test(format)) {
    format = format.replace(/yyyy/, timestamp.getFullYear())
  }

  const obj = {
    MM: timestamp.getMonth() + 1,
    dd: timestamp.getDate(),
    hh: timestamp.getHours(),
    mm: timestamp.getMinutes(),
    ss: timestamp.getSeconds()
  }

  for (let o in obj) {
    const reg = new RegExp(o)
    if (reg.test(format)) {
      format = format.replace(o, zeroFormat(obj[o]))
    }
  }

  return format
})
function zeroFormat (value) {
  value = '' + value
  return ('00' + value).substring(value.length)
}
