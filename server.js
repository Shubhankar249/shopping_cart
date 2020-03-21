const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', express.static('./front'))
app.use('/add', express.static('./front/addProduct.html'))
app.use('/api', require('./routes').route)

app.listen(2212)