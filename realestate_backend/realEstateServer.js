const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const expressValidator = require('express-validator');
const cors = require('cors');
require('dotenv').config();

//import routes
const authRoute = require("./Routes/auth"); 
const userRoute = require("./Routes/user"); 
const categoryRoute = require("./Routes/category"); 
const houseProductRoute = require("./Routes/HouseProduct"); 

//app
const app = express();

//db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected!"));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json()); 
app.use(cookieParser());
// app.use(expressValidator());
app.use(cors());


//route middleware
app.use("/api",authRoute);
app.use("/api",userRoute);
app.use("/api",categoryRoute);
app.use("/api",houseProductRoute);




//default route
app.get('/', (req, res) => {
    res.send("hello from node");
}); 

const port = process.env.PORT || 8000 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
