

(async () => {
    const query = require('./app/db')
    res = await query(`
        CREATE DATABASE IF NOT EXISTS test
    `)

    console.log('mysql create database:', res)

    res = await query(`
        CREATE table IF NOT EXISTS test.text  (
            id int,
            text varchar(300),
            primary key(id)
        );
        
    `)

    console.log('mysql create table:', res)

    res = await query('select * from test.text')
    console.log('mysql:', res)
    res = await query(`REPLACE INTO test.text (id,text) VALUES(1,'赵本山${new Date()}');`)
    console.log('mysql:', res)


     res = await query(`
        CREATE table IF NOT EXISTS test.user  (
            id int,
            username varchar(200),
            password varchar(200),
            salt varchar(200),
            primary key(id)
        );
    `)
    res = await query(`REPLACE INTO 
        test.user (id,username,password) 
        VALUES(1,'laowang','111111');`)
})()