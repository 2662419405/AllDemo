
(async () => {
    const query = require('./db')
    const encryptPassword = require('./password')
    let sql = `
    SELECT *
    FROM test.user
    `
    const res = await query(sql)
    const saltDb = async record => {
        sql = `
        update test.user
        set salt = ? ,
        password = ?
        where username = ?
        `
        const salt = Math.random() * 999999 + '' + new Date().getTime()
        console.log('salt:', salt)
        console.log('username:', record.username)
        await query(sql, [salt, encryptPassword(salt, record.password), record.username])

    }
    res.forEach(v => saltDb(v))
    console.log('end',res)
})()

