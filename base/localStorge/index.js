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
    this.time = 3600 * 60 * 24
  }
  getItem(key) {
    const origin = Base64.decode(this.storage.getItem(key))
    
  }
  setItem(key, value) {
    this.storage.setItem(key, Base64.encode(value)) // 简单加密
  }
  removeItem(key) {
    this.storage.removeItem(key)
  }
}

const storage = new Storage()

storage.removeItem('name')
