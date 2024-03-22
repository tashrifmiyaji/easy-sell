// external input
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

// internal input
const sign_up = require("./routers/sign_up_router")
const login = require("./routers/login_router")
const fruitList = require("./routers/fruit_list_router")
const update = require("./routers/update")


const app = express()
dotenv.config()

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(`${__dirname}/public`));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

  app.use("/", sign_up);
  app.use("/", login);
  app.use("/", fruitList);
  app.use("/", update);

app.listen(process.env.PORT, () => console.log(`app listening on http://localhost/${process.env.PORT}`))



