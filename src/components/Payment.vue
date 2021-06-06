<template>
  <div class="row payment">
    <ul class="nav justify-content-start">
      <li class="nav-item">
        <router-link :to="{ name: 'catalog' }" class="nav-link">
          <div class="go-to-catalog">
            <i class="bi bi-arrow-left"></i> Вернуться в каталог
          </div>
        </router-link>
      </li>
    </ul>
    <h1>Оплата</h1>
    <p class="payment-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore
      nam iusto debitis, exercitationem, sequi aperiam fugit excepturi ipsum
      nostrum nisi magni distinctio in pariatur necessitatibus! Inventore sit
      explicabo omnis.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.payment-description {
  text-align: left;
}
</style>
