<template>
  <div class="row gx-0 catalog">
    <!-- :to="" помогает переходить на страницу, по имени компонента -->
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link :to="{ name: 'delivery' }" class="nav-link">
          Доставка
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'payment' }" class="nav-link">
          Оплата
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'about' }" class="nav-link">
          О магазине
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'cart', params: { cartData: CART } }"
          class="nav-link"
        >
          <i class="bi bi-bag"></i> {{ CART.length }}
        </router-link>
      </li>
    </ul>

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
