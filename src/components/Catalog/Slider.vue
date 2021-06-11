<template>
  <div
    id="carouselExampleIndicators"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <a href="#/delivery">
          <img src="@/assets/images/slider1.jpg" class="d-block w-100" alt="..."
        /></a>
      </div>
      <div class="carousel-item">
        <a href="#/about">
          <img src="@/assets/images/slider2.jpg" class="d-block w-100" alt="..."
        /></a>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.carousel {
  padding-top: 20px;
}
.carousel-item img {
  border: 2px solid #000;
}
.carousel-item a {
  cursor: pointer;
}
.carousel-control-next,
.carousel-control-prev {
  color: #000;
}
</style>
