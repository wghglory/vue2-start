<!-- 使用了 vuex -->
<template>
<div class="product-list">
  <h2>Product List</h2>
  <ul>
    <li v-for="(product,index) in saleProducts" v-bind:key="index">
      <span>{{product.name}}</span>
      <span>${{product.price}}</span>
    </li>
  </ul>
  <button type="button" v-on:click="reducePrice(4)" name="button">Reduce price</button>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  // 从 store 读取 元数据，不能写到 data() 里面。
  computed: {
    products() {
      return this.$store.state.products;
    },
    // // 从 store getters 读取过滤后的数据
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // }

    // 简单写法：如果要显示的数据名字和 getters 里面名字一样
    ...mapGetters(['saleProducts'])
  },
  methods: {
    // reducePrice(amount) {
    //   // button click 后 dispatch action，并传递参数。store 接收到这个 action 后在里面 commit 某个 mutation 去修改数据
    //   this.$store.dispatch('reducePrice', amount);
    // }

    // 简单写法：如果 click 方法和 action 名字一样
    ...mapActions(['reducePrice'])
  }
};
</script>

<style scoped>
.product-list {
  background: #D1E4FF;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

.product-list ul {
  padding: 0;
  list-style-type: none;
}

.product-list li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

.price {
  font-weight: bold;
  color: #860CE8;
  display: block;
}
</style>
