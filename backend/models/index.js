const {Sequelize, Datatypes} = require('sequelize')
const sequelize  =  new Sequelize(`postgres://postgres:123456@localhost:5432/postgres`, {dialect: "postgres"})
sequelize.authenticate().then(()=> {

}).catch((err)=> {
    console.error(err)
})

const db = {
    
}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('./models/userModel.js')
module.exports = db