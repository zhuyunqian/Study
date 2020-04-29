// 删除更新了remove  （新建的云函数文件删除）

const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
exports.main = async (event, context) => {
  try {
    // 更改为自己的数据库名称
    return await db.collection('counters').where({
      // 这里修改为自己传入进来的条件
      name: event.name
    }).remove()
  } catch(e) {
    console.error(e)
  }
}