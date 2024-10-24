const express = require("express");
const dotenv = require("dotenv");
var path = require("path");
var fs = require("fs");
const errorHandler= require("./middleware/error")
const connectBD = require("./config/db");
const morgan = require("morgan");
const colors = require("colors");
const logger = require("./middleware/logger");

// categoriesoo oruul irn


const categorieRoutes = require("./routes/categories");
const { deletecategory } = require("./controller/categories");
const { register } = require("module");
console.log(__dirname);
dotenv.config({ path: "./config/config.env" });
connectBD();
const app = express();


//body parser
app.use(express.json());


app.use(logger);
const accessLogStream = fs.createWriteStream("access.log", { flags: "a" });

app.use(morgan("combined", { stream: accessLogStream }));

app.use("/api/v1/categories", categorieRoutes);
app.use(errorHandler);

const server = app.listen(
  process.env.PORT,
  console.log(`hello express server>> ${process.env.PORT}`.rainbow.bold)
);


process.on('unheandledRejection',(err, promise)=>{
  
  console.log(`aldaa garsan :${err.message}`)
  server.close(()=>{
    process.exit(1);
  })
} )
