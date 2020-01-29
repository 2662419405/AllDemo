const axios = require('axios')
const douban = require('doubanbook')
const cheerio = require('cheerio')
// 云函数入口文件
const cloud = require('wx-server-sdk')


cloud.init()

// 网络爬虫数据获取
async function getDoubanName(isbn){
  const url = `https://search.douban.com/book/subject_search?search_text=${isbn}`
  let searchInfo = await axios.get(url)
  // console.log(searchInfo)
  // 获取window.__DATA__ =后面的解密
  let reg = /window\.__DATA__ = "(.*)"/
  if(reg.test(searchInfo.data)){
    let searchDat = douban(RegExp.$1)[0]
    // console.log(RegExp.$1)
    return searchDat
  }
}

async function getDouban(isbn){
  const searchData = await getDoubanName(isbn)
  // console.log(searchData.url)
  let detailPath = await axios.get(searchData.url)
  // 第二个爬虫
  // cheerio 是在node里,使用jquery的语法,解析文档
  const $ =cheerio.load(detailPath.data)
  const info = $('#info').text().split('\n').map(v=>v.trim()).filter(v=>v)
  let author = info[1]
  let tags = []
  $('#db-tags-section a.tag').each((i,v)=>{
    tags.push({
      title: $(v).text()
    })
  })
  // console.log(info)
  const ret = {
    create_time: new Date().getTime(),
    author,
    tags,
    title: searchData.title,
    image: searchData.cover_url,
    url: searchData.url,
    rate: searchData.rating.value,
    summary: $('#link-report .intro').text()
  }
  // console.log(ret)
  return ret
}

// 本地调试
console.log(getDouban("9787010009148"))

// 所谓的云函数 就是一个node的函数
exports.main = async (event,context) => {
  const isbn = event.isbn
  return getDouban(isbn)
}