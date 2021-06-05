<!-- Главный компонент приложения после App -->
<template>
  <div class="container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<!-- Скрипты -->
<script>
export default {
  // name - указание названия текущего компонента
  name: 'Main',
  // components - указание дочерних компонентов
  components: {},
  // props - получение данных от родителя
  props: {},
  // data() - персональные данные текущего компонента
  data() {
    return {};
  },
  // computed - вычислительные свойства компонента
  computed: {},
  // methods - клики, показы модальных окон, запуски анимаций, отлавливание действий пользователя
  methods: {},
  // watch - позволяет следить за изменением чего-либо и в случае отлавливания, что-то делать
  watch: {},
  // mounted - отрабатывается когда компонент польностью загрузится
  mounted() {},
};
</script>

<!-- Стили -->
<style>
.container {
  height: 100%;
  width: 100%;
}
h1 {
  font-weight: bold;
  margin-bottom: 30px;
}
</style>
