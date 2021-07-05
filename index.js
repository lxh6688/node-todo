const homedir = require('os').homedir()
const home = process.env.HOME || homedir
const p = require('path')
const fs = require('fs')
const dbPath = p.join(home, '.todo')
const db = require('./db.js')

module.exports.add = async (title) => {
//  读取之前的任务
  const list = await db.read()
//  往里面添加一个 title 任务
  list.push({title, done:false})
//  存储任务到文件
  db.write(list)
}