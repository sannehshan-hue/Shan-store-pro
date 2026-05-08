const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

let products = [
  {id:1,name:"Gaming Laptop",price:95000},
  {id:2,name:"Phone",price:35000}
];

let orders = [];

app.get("/api/products",(req,res)=>{
  res.json(products);
});

app.post("/api/orders",(req,res)=>{
  orders.push(req.body);
  res.json({message:"Order created"});
});

app.get("/api/orders",(req,res)=>{
  res.json(orders);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log("Cyberx backend running");
});