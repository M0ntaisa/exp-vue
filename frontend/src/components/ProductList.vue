<template lang="">
  <div>
    <router-link :to="{name: 'Create'}" class="button is-success mt-5">Add New Product</router-link>
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
          <td>
            <router-link 
              :to="{name: 'Update', params:{ id: item.product_id }}" 
              class="button is-info is-small"
            >
              Update
            </router-link>
            <a class="button is-danger is-small" @click="deleteProduct(item.product_id)">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
    },

    // delete product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="">
  
</style>