const express = require("express")
const morgan = require("morgan")
const giftExchangeRouter = require("./routes/gift-exchange")
// const quizRouter = require("./routes/quiz")
const { NotFoundError } = require("./utils/errors")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use("/gift-exchange", giftExchangeRouter)
// app.use("/quiz", quizRouterv)


app.get("/", async (req, res, next) => {
  res.status(200).json({"ping": "pong"})
})

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message || "Something went wrong in the application"
    return res.status(status).json({error: { status, message }})
})

module.exports = app
