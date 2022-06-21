const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const router = express.Router()

// class someObject {

// }

router.post("/pairs", async (req, res, next) => {
    try
    {
        const names = req.body.names  // aray of users who will enter the gift exchange
        const pairs = await GiftExchange.pairs(names)
        res.status(200).json({"names": pairs})
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
        res.status(200).json({"names": pairs})
    }
    catch (err)
    {
        next(err)
    }
    
})


module.exports = router