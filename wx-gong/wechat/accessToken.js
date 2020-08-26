/**
 * 用来管理access_token
 */
const rp = require('request-promise-native')
const { writeFile, readFile } = require('fs')
const { appID, appsecret } = require('../config/config')

class WeChat {
  constructor() {}
  /**
   * 用来获取access_token
   */
  getAccessToken() {
    let url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appsecret}`
    return new Promise((resolve, reject) => {
      rp({ method: 'get', url, json: true })
        .then(res => {
          res.expires_in = Date.now() + (res.expires_in - 300) * 1000
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  /**
   * 用来保存access_token
   * @param { Object } 存储的Access_token的数据
   */
  saveAccessToken(accessToken) {
    accessToken = JSON.stringify(accessToken)
    return new Promise((resolve, reject) => {
      writeFile('./accessToken.txt', accessToken, err => {
        if (!err) {
          console.log('文件保存成功')
          resolve()
        } else {
          reject('保存Access_token出现了问题', err)
        }
      })
    })
  }
  /**
   * 用来读取access_token
   */
  readAccessToken() {
    return new Promise((resolve, reject) => {
      readFile('./accessToken.txt', (err, data) => {
        if (!err) {
          data = JSON.parse(data)
          resolve(data)
        } else {
          reject('保存Access_token出现了问题', err)
        }
      })
    })
  }
  /**
   * 判断access_token是否有效
   * @param { Object } 传参
   */
  isVaildAccessToken(data) {
    // 检测传入的参数是否正确
    if (!data && !data.access_token && data.expires_in) {
      return false
    }
    return data.expires_in > Date.now()
  }
  /**
   * 用来刷新access_token是否有效
   * @returns {Promise<any>} access_token
   */
  featchAccessToken() {
    if (this.access_token && this.expires_in && this.isVaildAccessToken(this)) {
      return Promise.resolve({
        expires_in: this.expires_in,
        access_token: this.access_token,
      })
    }
    return this.readAccessToken()
      .then(async res => {
        // 有本地文件
        if (this.isVaildAccessToken(res)) {
          return Promise.resolve(res)
        } else {
          const res = await this.getAccessToken()
          await this.saveAccessToken(res)
          return Promise.resolve(res)
        }
      })
      .catch(async err => {
        const res = await this.getAccessToken()
        await this.saveAccessToken(res)
        return Promise.resolve(res)
      })
      .then(res => {
        // 将access_token挂载到this上
        this.access_token = res.access_token
        this.expires_in = res.expires_in
        // 返回res包装promise
        return Promise.resolve(res)
      })
  }
}

const we = new WeChat()
