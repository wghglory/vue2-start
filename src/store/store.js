import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  // data source
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 }
    ]
  },
  // 调用 store 的组件 也可以使用 computed 达到对 data source 的过滤，但如果多个组件都需要过滤的数据就要用下 getters 避免重复。
  getters: {
    // 根据 data source 过滤后的数据，半价
    saleProducts: state => {
      return state.products.map(product => ({
        name: '**' + product.name + '**',
        price: product.price / 2
      }));
    }
  },
  // 对 data source 进行修改，需要通过 dispatch action 里面 commit 操作就可以调用相应的 mutation
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  // 要修改的操作
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit('reducePrice', payload);
      }, 2000);
    }
  }
});
