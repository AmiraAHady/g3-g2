const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const ProductModel = require("./models/product");

mongoose
  .connect('connection string'
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error connect to DB");
  });

server.use(cors());

// path:/products,method:Get==>all Products
// req =>request info
// res=>responed to user
server.get("/products", function (req, res) {
  ProductModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("Sorry Cant retrive Data");
    });
});
// path:/getProductById/:id,method:Get==>get single product

server.get("/getProductById/:id", function (req, res) {
  var prodId = +req.params.id;
  ProductModel.find({ id: prodId })
    .then((product) => {
      if (product) {
        res.send(product);
      } else {
        res.send("cant find product with this id!");
      }
    })
    .catch((err) => {
      res.send("Error retrive Data");
    });
});
// path:/deleteProduct/:id,method:Get==>get single product
server.delete("/deleteProduct/:id", function (req, res) {
  var prodId = +req.params.id;
  ProductModel.deleteOne({ id: prodId })
    .then((product) => {
      res.send("Deleted successfully");
    })
    .catch((err) => {
      res.send("Error Delete product with this id ");
    });
});

//http://localhost:3001/
// port Number
server.listen(3001, function () {
  console.log("Server connected!");
});
