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
    <button class="button is-success mt-5" @click="updateProduct">
      UPDATE
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
      productPrice: "",
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // get product by id
    async getProductById() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        this.productName = response.data.product_name;
        this.productPrice = response.data.product_price;
      } catch (error) {
        console.log(error);
      }
    },
    // update product
    async updateProduct() {
      try {
        const id = this.$route.params.id;
        await axios.put(
          `http://localhost:5000/products/${id}`, 
          {
            product_name:this.productName,
            product_price:this.productPrice,
          }
        );
        ( this.productName = "" ), ( this.productPrice = "" );
        this.$router.push("/index");
      } catch (error) {
        
      }
    }
  },
}
</script>
<style lang="">
  
</style>