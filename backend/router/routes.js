// import express
import express from "express";

// import functions from controllers
import { 
  showProducts,
  showSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

// init express router
const router = express.Router();

// all products
router.get("/products", showProducts);

// single product
router.get("/products/:id", showSingleProduct);

// create new product
router.post("/products", createProduct);

// update product
router.put("/products/:id", updateProduct);

// delete product
router.delete("/products/:id", deleteProduct);

// export default router
export default router;