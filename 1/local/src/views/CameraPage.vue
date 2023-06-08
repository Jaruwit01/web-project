<template>
  <div>
    <header class="fs-1 text-center mt-2">Camera Box</header>
    <div
      id="carouselExampleIndicators"
      class="carousel slide mx-5 mt-4"
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
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
      </div>
      <div class="carousel-inner">
        <router-link to="/DSLR-Camera" class="carousel-item active">
          <img src="../assets/DSLR.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h3>DSLR Camera</h3>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </router-link>
        <router-link to="/Mirrorless-Camera" class="carousel-item">
          <img src="../assets/Mirrorless.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h3>Mirrorless Camera</h3>
            <p>Some representative placeholder content for the first slide.</p></div>
          
        </router-link>

        <router-link to="/Compact-Camera" class="carousel-item">
          <img src="../assets/Compact.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h3>Compact Camera</h3>
            <p>Some representative placeholder content for the first slide.</p></div>
          
        </router-link>

        <router-link to="/Film-Camera" class="carousel-item">
          <img src="../assets/Film.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h3>Film Camera</h3>
            <p>Some representative placeholder content for the first slide.</p></div>
          
        </router-link>

        <router-link to="/Instant-Camera" class="carousel-item">
          <img src="../assets/Instant.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">          
            <h3>Instant Camera</h3>
            <p>Some representative placeholder content for the first slide.</p></div>
        </router-link>

        <router-link to="/Action-Camera" class="carousel-item">
          <img src="../assets/Action.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h3>Action Camera</h3>
            <p>Some representative placeholder content for the first slide.</p></div>
          
        </router-link>

        <router-link to="/Camcorder-Camera" class="carousel-item">
          <img src="../assets/camcorder.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h3>Camcorder Camera</h3>
            <p>Some representative placeholder content for the first slide.</p></div>
          
        </router-link>
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
  </div>
</template>
<script>
export default {
  name: "Camera-page",
};
</script>
<style scoped>
.carousel-item {
  height: 100vh;
  max-height: 600px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
</style>
