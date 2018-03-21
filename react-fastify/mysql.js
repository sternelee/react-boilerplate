const Seq = require('sequelize')
const seq = new Seq('mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

seq
    .authenticate()
    .then(() => {
        console.log('数据连接成功了')
    })
    .catch(err => {
        console.log('数据连接失败，请重新配置')
    })

module.exports = seq;