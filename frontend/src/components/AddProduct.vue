<template lang="">
  <div>
    <div class="field">
      <label class="label">Product Name</label>
    </div>
    <div class="control">
      <input type="text" class="input" placeholder="Product Name" v-model="productName" />
    </div>
  </div>
  <div>
    <div class="field">
      <label class="label">Product Price</label>
    </div>
    <div class="control">
      <input type="text" class="input" placeholder="Price" v-model="productPrice" />
    </div>
  </div>
  <div class="control">
    <button class="button is-success mt-5" @click="saveProduct">
      SAVE
    </button>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  data() {
    return {
      productName: "",
      productPrce: "",
    };
  },
  methods: {
    // create new product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          product_name:this.productName,
          product_price:this.productPrice,
        });
        (this.productName = ""),
        (this.productPrice = "");
        this.$router.push("/index");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="">
  
</style>