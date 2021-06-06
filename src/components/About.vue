<template>
  <div class="row about">
    <ul class="nav justify-content-start">
      <li class="nav-item">
        <router-link :to="{ name: 'catalog' }" class="nav-link">
          <div class="go-to-catalog">
            <i class="bi bi-arrow-left"></i> Вернуться в каталог
          </div>
        </router-link>
      </li>
    </ul>

    <h1>О магазине</h1>
    <p class="about-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      recusandae voluptas ut. Aut tenetur commodi cum eius debitis.
      Necessitatibus reprehenderit unde voluptates a quod commodi nam molestias
      repudiandae incidunt totam.
    </p>
  </div>
</template>

<style>
.about-description {
  text-align: left;
}
</style>
