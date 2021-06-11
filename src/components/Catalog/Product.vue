<template>
  <div class="card col-md-4 product">
    <Modal v-if="showModal" :show="showModal" v-on:hide="showModal = false" />

    <!-- require необходим для указания димамических путей до картинок -->
    <img
      class="product-image img-fluid"
      :src="require('@/assets/images/' + productData.image)"
      alt=""
    />
    <p class="product-title">
      {{ productData.name }}
      <a class="product-info"
        ><i class="bi bi-info-square" v-on:click="showDetails(productData)"></i
      ></a>
    </p>

    <p class="product-price">
      Цена: <strong>{{ productData.price }} тг.</strong>
    </p>

    <div class="add-to-cart">
      <button type="button" class="btn btn-outline-primary" @click="addToCart">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<!-- props - это то, что мы получаем от родителя (в нашем случае объект, по умолчанию пустой объект -->
<script>
import Modal from './Modal.vue';

export default {
  name: 'Product',
  components: {
    Modal,
  },
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      product: null,
      products: [],
      showModal: false,
    };
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData);
    },
    showDetails(product) {
      this.productData = product;
      this.showModal = true;
    },
  },
  watch: {},
  mounted() {
    this.$set(this.productData, 'quantity', 1);
  },
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
  margin-bottom: 0.5rem;
}
.product-info {
  cursor: pointer;
}
</style>
