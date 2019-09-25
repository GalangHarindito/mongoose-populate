const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./config/database")
const {PORT} = require("./config/variableEnv")
const userRouter = require('./routes/users')
const addressRouter = require('./routes/address')

const app = express();
const port = PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


db.then(() => {
    console.log(`connected to database`)
})
.catch (error => {
    console.log(`error, something wrong with the connection`, error)
})

app.use("/users", userRouter )
app.use("/address", addressRouter)

app.listen(port, () => {
  console.log(`server runningon port:${port}`);
});

