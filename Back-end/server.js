const express = require("express");
const cors = require("cors");
const db = require("./models");
const bodyParser = require("body-parser");

const userRouter = require("./router/userrouter");
const produitrouter = require ("./router/produitrouter");
const orderrouter = require ('./router/orderrouter');



const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Request-Method", "*");
  res.setHeader("Acces-Control-Allow-Headers", "*");
  next();
});

// Set up CORS
app.use(
  cors({
    origin: true, // "true" will copy the domain of the request back
    // to the reply. If you need more control than this
    // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
    // authenticated via either a session cookie
    // or Authorization header. Otherwise the
    // browser will block the response.

    methods: "POST,GET,PUT,PATCH,OPTIONS,DELETE", // Make sure you're not blocking
    // pre-flight OPTIONS requests
  })
);

app.use("/",userRouter);
app.use("/",produitrouter);
app.use("/",orderrouter);
// middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const path = require("path");
app.use("/Images", express.static(path.join("api/Images")));

// routers


app.get("/", (req, res) => {
  res.send("hello world");
});


//static Images Folder

app.use("/Images", express.static("./Images"));


//port

// app.use(express.static(__dirname+'/dist'));

// app.get('/',function(req,res){
// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

const PORT = process.env.PORT || 3000;

//server

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
});
