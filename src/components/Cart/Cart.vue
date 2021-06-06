<template>
  <div class="row cart">
    <ul class="nav justify-content-start">
      <li class="nav-item">
        <router-link :to="{ name: 'catalog' }" class="nav-link">
          <div class="go-to-catalog">
            <i class="bi bi-arrow-left"></i> Вернуться в каталог
          </div>
        </router-link>
      </li>
    </ul>

    <h1>Корзина</h1>
    <p v-if="!cartData.length">Корзина пуста!</p>
    <ProductCart
      v-for="(product, index) in cartData"
      :key="product.article"
      :productCartData="product"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart-footer">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <p class="cart-total-title">
            Общая сумма заказа: <strong>{{ cartTotalPrice }} тг.</strong>
          </p>
        </li>
        <li class="nav-item">
          <div class="checkout">
            <button class="btn btn-success">Оформить заказ</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductCart from './ProductCart';
import { mapActions } from 'vuex';

export default {
  name: 'Cart',
  components: {
    ProductCart,
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    cartTotalPrice() {
      let totalPrice = [];

      if (this.cartData.length) {
        for (let product of this.cartData) {
          totalPrice.push(product.price * product.quantity);
        }

        totalPrice = totalPrice.reduce((sum, el) => sum + el);

        return totalPrice;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_PRODUCT',
      'DECREMENT_CART_PRODUCT',
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_PRODUCT(index);
    },
    decrement(index) {
      this.DECREMENT_CART_PRODUCT(index);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.cart {
  margin-bottom: 120px;
}
.go-to-catalog {
  text-align: left;
}
.cart-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 0;
  background: #eee;
  clear: both;
}
.cart-total-title {
  font-size: 1.1rem;
  display: block;
  padding: 0.5rem 1rem;
  margin: 0;
}
.checkout {
  padding: 2px 3rem 0 1rem;
}
</style>
