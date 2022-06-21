const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const router = express.Router()

// router.get("/", async (req, res, next) => {
//     try
//     {
//         const listOfQA = GiftExchange.quiz()
//         res.status(200).json(listOfQA)
//     }   
//     catch (err)
//     {
//         next(err)
//     } 
// })

// router.post("/", async (req, res, next) => {

// })



module.exports = router