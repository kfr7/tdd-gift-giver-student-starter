const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const router = express.Router()

class Pair {
    constructor(name1, name2)
    {
        this.name1 = name1
        this.name2 = name2
    }
}

router.post("/pairs", async (req, res, next) => {
    try
    {
        const names = req.body.names  // aray of users who will enter the gift exchange
        const pairs = await GiftExchange.pairs(names)
        res.status(200).send(pairs)
    }   
    catch (err)
    {
        next(err)
    }
})

router.post("/traditional", async (req, res, next) => {
    try
    {
        const names = req.body.names  // aray of users who will enter the gift exchange
        const pairs = await GiftExchange.traditional(names)
        res.status(200).send(pairs)
    }
    catch (err)
    {
        next(err)
    }
    
})


module.exports = router