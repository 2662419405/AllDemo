const { Base64 } = require('js-base64')
const moment = require('moment')
/**
 * 获取localstorage
 * 更新localstorage
 * 删除localstorage
 */
class Storage {
  constructor() {
    this.storage = window.localStorage
  }
  getItem(key) {
    const origin = JSON.parse(Base64.decode(this.storage.getItem(key)))
    const { time } = origin
    if (time > new Date.getItem()) {
      return {
        ...origin,
        message: `'过期时间', ${moment(time).format('YYYY-MM-DD HH:mm:ss')}`,
      }
    } else {
      this.removeItem(key)
      return ''
    }
  }
  setItem(key, value, time = new Date.getItem() + 3600 * 24) {
    if (typeof time === 'object') {
      value = { value }
    }
    this.storage.setItem(key, Base64.encode(JSON.stringify({ ...value, time }))) // 简单加密
  }
  removeItem(key) {
    this.storage.removeItem(key)
  }
}
