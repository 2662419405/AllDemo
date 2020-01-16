
(async () => {
  const { MongoClient: MongoDB } = require('mongodb')

  // 创建客户端
  const client = new MongoDB(
    'mongodb://localhost:27017',
    {
      userNewUrlParser: true
    }
  )
  let ret
  // 创建连接
  ret = await client.connect()
  console.log('ret:', ret)
  const db = client.db('test')
  const fruits = db.collection('fruits')

  // 添加文档
  ret = await fruits.insertOne({
    name: '芒果',
    price: 20.1
  })
  console.log('插入成功', JSON.stringify(ret))

  // 查询文档
  ret = await fruits.findOne()
  console.log('查询文档:', ret)

  // 更新文档
  ret = await fruits.updateOne({ name: '芒果' }, 
  { $set: { name: '苹果' } })
  console.log('更新文档', JSON.stringify(ret.result))

  // 删除文档
  ret = await fruits.deleteOne({name: '苹果'})

  await fruits.deleteMany()

  client.close()

})()
