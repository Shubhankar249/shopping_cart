const route=require('express').Router()
const {user}=require('.././db')

route.get('/', (req, res) => {
    user.findAll()
        .then((users) =>{
            res.status(200).send(users)
        }).catch((e) => res.status(500).send({error: 'Could not retrieve users'}))
})

route.post('/', (req, res) => {
    user.create({name: req.body.name})
        .then((user) => res.status(201).send(user))
        .catch((e) => res.status(501).send({error:"Could not create user"}))
})

module.exports=route