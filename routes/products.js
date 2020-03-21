const route=require('express').Router()
const {product}=require('.././db')

route.get('/', (req, res) => {
    product.findAll()
        .then((product) =>{
            res.status(200).send(product)
        }).catch((e) => res.status(500).send({error: 'Could not retrieve products'}))
})

route.post('/', (req, res) => {
    //Validation of price
    if (isNaN(req.body.price))
        return res.status(403).send({error:'Give integer value for price'})

    product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseInt(req.body.price)
    })
        .then((product) => res.status(201).send(product))
        .catch((e) => res.status(501).send({error:"Could not add product"}))
})

module.exports=route