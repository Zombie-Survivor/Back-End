const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000 
const userRouter = require("./routers/userRouter.js")
const gameScoreRouter = require("./routers/gameScoreRouter.js")


app.use("/users", userRouter)
app.use("/highest-session-score", gameScoreRouter)


app.listen(PORT, function(){
  console.log("Server started on port: ", PORT);
})