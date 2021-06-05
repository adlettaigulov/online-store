<template>
  <div class="row gx-0 catalog">
    <!-- :to="" помогает переходить на страницу, по имени компонента -->
    <router-link :to="{ name: 'cart', params: { cartData: CART } }">
      <div class="go-to-cart"><i class="bi bi-bag"></i> {{ CART.length }}</div>
    </router-link>

    <h1>Каталог товаров</h1>
    <!-- Перебор массива с данными с помощью v-for через уникальный ключ (:key) article из массива products, который лежит в data() -->
    <!-- Связывание дочернего элемента Product с родителем Catalog через v-bind (можно сокращенно просто двоеточие) -->
    <Product
      v-for="product in PRODUCTS"
      :key="product.article"
      :productData="product"
      @addToCart="addToCart"
    />
    <!-- Связывание двух методов (сначала дочерний, потом родительский)-->
  </div>
</template>

<script>
import Product from './Product';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Catalog',
  components: {
    Product,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    // Получание с помощью mapGetter PRODUCTS из store.js
    ...mapGetters(['PRODUCTS', 'CART']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  watch: {},
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log('Информация получена!');
      }
    });
  },
};
</script>

<style>
.catalog {
  display: flex;
  flex-wrap: wrap;
}
.catalog a {
  text-decoration: none;
}
.product-image {
  max-width: 400px;
}
.go-to-cart {
  text-align: right;
}
</style>
