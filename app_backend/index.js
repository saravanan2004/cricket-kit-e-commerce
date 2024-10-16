var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000
const cors=require('cors');
app.use(express.json());

app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cricket"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB connected");
  
});

app.get('/', (req, res) => {
  res.send('Hello Saravanan!')
})

app.get('/getproducts', (req, res) => {
  con.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
  
})

app.post('/add-to-cart', (req, res) => {
  const { ProductId, ProductName, ProductPrice, ProductQuantity } = req.body;

  // Check if the product already exists
  const checkProductSql = "SELECT * FROM products WHERE product_id = ?";
  
  con.query(checkProductSql, [ProductId], function(err, result) {
    if (err) throw err;

    if (result.length > 0) {
      // Product exists, update the quantity or any other details
      const updateSql = "UPDATE products SET product_name = ?, product_price = ?, product_quantity = ? WHERE product_id = ?";
      
      con.query(updateSql, [ProductName, ProductPrice, ProductQuantity, ProductId], function(err, result) {
        if (err) throw err;
        console.log("Product updated:", {
          ProductId,
          ProductName,
          ProductPrice,
          ProductQuantity
        });
        res.status(200).send({ message: 'Product updated successfully!' });
      });
    } else {
      // Product does not exist, insert a new one
      const insertSql = "INSERT INTO products (product_id, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)";
      
      con.query(insertSql, [ProductId, ProductName, ProductPrice, ProductQuantity], function(err, result) {
        if (err) throw err;
        console.log("Product added to cart:", {
          ProductId,
          ProductName,
          ProductPrice,
          ProductQuantity
        });
        res.status(200).send({ message: 'Product added to cart successfully!' });
      });
    }
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})