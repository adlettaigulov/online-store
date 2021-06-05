<template>
  <div class="card col-4 product">
    <!-- require необходим для указания димамических путей до картинок -->
    <img
      class="product-image"
      :src="require('@/assets/images/' + productData.image)"
      alt=""
    />
    <p class="product-title">{{ productData.name }}</p>
    <p class="product-price">Цена: {{ productData.price }} тг.</p>

    <!-- Обработчик @click для метода sendDataToParent-->
    <div class="add-to-cart">
      <button type="button" class="btn btn-outline-primary" @click="addToCart">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<!-- props - это то, что мы получаем от родителя (в нашем случае объект, по умолчанию пустой объект -->
<script>
export default {
  name: 'Product',
  components: {},
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.card {
  border: none;
  padding-bottom: 25px;
}
.product-title {
  font-weight: 900;
  margin-top: 1rem;
}
</style>
