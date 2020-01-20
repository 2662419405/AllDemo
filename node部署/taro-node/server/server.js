const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()


app.use(express.static('static'))


app.get('/', (req, res) => res.send('Hello World!'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))


const course = JSON.parse(fs.readFileSync(path.resolve(__dirname,'./goods.json')).toString())

const allData = []

course.tags.forEach(key=>{
  course.data[key].forEach(cor=>{
    allData.push(cor)
  })
})


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});






  app.get('/api/top', (req,res)=>{
    const newData = [...allData]
    newData.sort((a,b)=>{
      return b.solded-a.solded
    })
    res.json({
      code:0,
      data:newData.slice(0,5)
    })
  })
  app.get("/api/goods",(req,res)=>{
    const page = req.query.page || 1

    const start = (page-1)*10
    const end = start+10
    setTimeout(()=>{
      res.json({
        code:0,
        data:allData.slice(start,end)
      })
    },1000)
  })

  app.get('/api/detail',(req,res)=>{
    const {id} = req.query
    course.tags.forEach(key=>{
      course.data[key].forEach(cor=>{
        console.log(cor.id,id)
        if(cor.id==id){
          cor.desc=`北京开课吧科技有限公司，简称开课吧，是慧科集团旗下高端互联网职业教育平台。
          作为互联网从业者职业成长平台，开课吧致力于高效连接人与职业，
          基于创新科技提供智慧学习服务，通过线上班级在 kaikeba.com 的交付，
          用一线企业的实效实战教育产品，为互联网人提供职业成长服务。
          目前推出在线课程有:
          《Web全栈架构师》《JavaEE企业级分布式高级架构师》《百万年薪架构师》
          《Python爬虫商业项目班》《UXD全栈设计师》《产品经理特训营》《机器学习特训营》`
          return res.json({
            code:0,
            data:{
              detail:cor,
            }
          })
        }
      })
    })
  })

  app.post('/api/login',(req,res)=>{
    const {username,passwd} = req.body
    console.log(username,passwd)
    if(username=='kaikeba' && passwd=="123"){
      return res.json({
        code:0,
        data:{
          token:'kaikebaisgood',
          role:'admin',
          balance:1000,
          username:"kaikeba"
        }
      })
    }
    if(username=='dasheng' && passwd=="123"){
      return res.json({
        code:0,
        data:{
          token:'kaikebaisgood',
          role:'user',
          balance:100,
          username:'dasheng'
        }
      })
    }
    return res.json({
      code:-1,
      msg:'密码错误'
    })
  })
 