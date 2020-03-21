const seq=require('sequelize')
const dataType=seq.DataTypes
const db= new seq('shopdb', 'shopper', 'buypass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min:0, max: 3
    }
})

const user = db.define('users', {
    name: dataType.STRING
})

const product=db.define('products', {
    name:dataType.STRING,
    manufacturer:dataType.STRING,
    price: {
        type:dataType.INTEGER,
        allowNull:false,
        defaultValue:0
    }
})

db.sync({alter:true})
    .then(() => console.log("db synced"))
    .catch((e) => console.error(e))


module.exports={
    user, product
}
