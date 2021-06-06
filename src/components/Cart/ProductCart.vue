<template>
  <div class="product-cart row align-items-center">
    <div class="col">
      <img
        class="product-cart-image"
        :src="require('@/assets/images/' + productCartData.image)"
        alt=""
      />
    </div>
    <div class="col product-cart-name align-middle">
      Наименование: <br />
      <strong>{{ productCartData.name }}</strong>
    </div>
    <div class="col product-cart-price">
      Цена: <br />
      <strong>{{ productCartData.price }} тг.</strong>
    </div>
    <div class="col product-cart-article">
      Артикул: <br />
      <strong>{{ productCartData.article }}</strong>
    </div>
    <div class="col product-cart-quantity">
      Количество: <br />
      <i @click="decrementProduct" class="bi bi-dash"></i
      ><strong>{{ productCartData.quantity }}</strong
      ><i @click="incrementProduct" class="bi bi-plus"></i>
    </div>

    <div class="col product-cart-delete">
      <button class="btn btn-danger text-nowrap" @click="deleteFromCart">
        Удалить из корзины
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart',
  props: {
    productCartData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart');
    },
    incrementProduct() {
      this.$emit('increment');
    },
    decrementProduct() {
      this.$emit('decrement');
    },
  },
  mounted() {},
};
</script>

<style>
.product-cart {
  padding-bottom: 20px;
  text-align: left;
}
.product-cart-image {
  max-width: 150px;
}
.product-cart-quantity i {
  cursor: pointer;
}
.product-cart-delete button {
  line-height: 1.3;
}
</style>
