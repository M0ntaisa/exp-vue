// import connection
import db from "../config/database.js";

// get all products
export const getProducts = (res) => {
  db.query("SELECT * FROM product", (err, results) => {
    if (err) {
      console.log(err)
      res(err, null)
    } else {
      res(null, results)
    }
  });
};

// get single product
export const getProductById = (id, res) => {
  db.query("SELECT * FROM product WHERE product_id = ?", [id] , (err, results) => {
    if (err) {
      console.log(err)
      res(err, null)
    } else {
      res(null, results[0])
    }
  });
};

// insert product to database
export const insertProduct = (data, res) => {
  db.query("INSERT INTO product SET ?", [data], (err, results) => {
    if (err) {
      console.log(err)
      res(err, null)
    } else {
      res(null, results)
    }
  });
};

// update product 
export const updateProductById = (data, id, res) => {
  db.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {
    if (err) {
      console.log(err)
      res(err, null)
    } else {
      res(null, results)
    }
  });
};

// delete product
export const deleteProductById = (id, res) => {
  db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err)
      res(err, null)
    } else {
      res(null, results)
    }
  });
};