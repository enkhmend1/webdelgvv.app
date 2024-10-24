// const mongoose = require("mongoose");

// const connectBD = async () => {
//   const conn = await mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   });
//   console.log(`Mongodb holbogdloo :${conn.connection.host}`);
// };
// module.exports = connectBD;
// const mongoose = require("mongoose");

// const connectBD = async () => {
//   const conn = await mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,

//   });
//   console.log(`Mongodb holbogdloo :${conn.connection.host}`);
// };
// module.exports = connectBD;
// const colors = require("colors")
// const mongoose = require("mongoose");

// const connectBD = async () => {
//   const conn = await mongoose.connect(process.env.MONGODB_URI);
//   console.log(`Mongodb holbogdloo :${conn.connection.host}`.green.bold);
// };
// module.exports = connectBD;

// const colors = require("colors");
const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set('debug', true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      ssl: true, // Ensure SSL is enabled
    });
    console.log(`Mongodb holbogdloo: ${conn.connection.host}`.green.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;

