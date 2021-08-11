const express=require('express');
const cors=require('cors');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const connectDB = require("./db");

require('dotenv').config();

const app=express();
const port= 7781 ;
// var jsonParser = bodyParser.json()



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
connectDB();
const uri = process.env.ATLAS_URI;
// try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//     console.log("MONGO DB CONNECTED");
//   } catch (err) {
//     console.error(err.message);
//     // EXIT PROCESS with FAILURE
//     process.exit(1);
//   }
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,  useUnifiedTopology: true ,useFindAndModify:false  }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })


// const studentsRouter = require('./routers/students');
const paymentsRouter=require('./routers/payments')
const ordersRouter=require('./routers/orders')
const restaurantsRouter=require('./routers/restaurants')
const promosRouter=require('./routers/promos')
const promoskhanRouter=require('./routers/promoskhan')
const promosjawaidRouter=require('./routers/promosjawaid')
const promospizzaRouter=require('./routers/promospizza')
const promosshaheenRouter=require('./routers/promosshaheen')
const promoscafeRouter=require('./routers/promoscafe')
const usersRouter=require('./routers/users')


// app.use('/students',studentsRouter);
app.use('/payments',paymentsRouter);
app.use('/orders',ordersRouter);
app.use('/restaurants',restaurantsRouter);
app.use('/promos',promosRouter);
app.use('/promoskhan',promoskhanRouter);
app.use('/promosjawaid',promosjawaidRouter);
app.use('/promospizza',promospizzaRouter);
app.use('/promosshaheen',promosshaheenRouter);
app.use('/promoscafe',promoscafeRouter);
app.use('/users',usersRouter);


// app.use(function (req, res, next) {
//     /*var err = new Error('Not Found');
//      err.status = 404;
//      next(err);*/
  
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
  
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
//   //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
//     // Pass to next layer of middleware
//     next();
//   });
// app.use(function(req,res,next){
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','Orgin,X-Requested-With,Content-Type,Accept');
//     next();
// });
// // 
//  middleware is used



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})