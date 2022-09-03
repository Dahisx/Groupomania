const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require("path");

// security plugin
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoSanitize = require('express-mongo-sanitize');
const mongooseExpressErrorHandler = require("mongoose-express-error-handler");

//Import Router
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
// 
dotenv.config();
const app = express();
app.use(helmet.crossOriginResourcePolicy({ policy: "same-site" }));
app.use(mongooseExpressErrorHandler);

app.use(mongoSanitize());


// Mongoose log
mongoose
  .connect(process.env.HOST_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

// CROSS ORIGIN
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));
console.log('here');
app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
