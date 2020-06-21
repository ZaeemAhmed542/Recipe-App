const express = require("express")
const User = require('./userSchema')
const router = express.Router()

router.get('/:email',(req,res) => {
    return User.findOne({email:req.params.email})
    .then(user => {
        res.send(user || {
            name:"",
            email:"",
            recipes:[]
        })
    })
})

router.post('/', async (req,res) => {
    return User.findOne({email:req.body.email})
    .then(userExists => {
        if(userExists) {
            return res.send(userExists)
        }
        const user = new User({
            name:req.body.name,
            email:req.body.email
        })
        return user.save()
        .then(user => {
            res.send(user)
        })
    })
})


router.patch('/:email', async (req,res) => {
    const user = await User.findOne({email:req.params.email})
    if(user){
        user.recipes.push(req.body.recipe)
        return user.save()
        .then(user => res.send(req.body.recipe))
    }
})


router.delete('/:email', async(req, res) => {
    const user = await User.findOne({email:req.params.email})
    if(user){
        user.recipes = user.recipes.filter(recipe => {
           return recipe.recipeId != req.body.recipeId
        })
        return user.save()
        .then(user => res.send(req.body))
    }
})

module.exports = router