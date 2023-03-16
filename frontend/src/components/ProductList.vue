<template lang="">
  <table class="table is-stripped is-bordered mt-2 is-fullwidth">
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Product Price</th>
        <th class="has-text-centered">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.product_id">
        <td>
          {{item.product_name}}
        </td>
        <td>
          $ {{item.product_price}}
        </td>
        <td>upd | del</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import axios
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    // get all products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data;
        console.log(this.items);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>
<style lang="">
  
</style>