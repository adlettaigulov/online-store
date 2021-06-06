<template>
  <div class="row delivery">
    <ul class="nav justify-content-start">
      <li class="nav-item">
        <router-link :to="{ name: 'catalog' }" class="nav-link">
          <div class="go-to-catalog">
            <i class="bi bi-arrow-left"></i> Вернуться в каталог
          </div>
        </router-link>
      </li>
    </ul>
    <h1>Доставка</h1>
    <p class="delivery-description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa facilis
      eum distinctio in debitis excepturi dolor sequi doloremque dolores ut
      laborum aperiam dicta impedit, commodi placeat eaque voluptatem
      aspernatur? Ullam!
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.delivery-description {
  text-align: left;
}
</style>
