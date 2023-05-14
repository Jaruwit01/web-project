<template>
  <div>
    <header>DSL Camera</header>
    <Cards>
      <template v-slot:pictur>
        <img
          src="/Befor Login/camera Page/pic/camera/20221104_032921_sony-a7r-v-1.jpg"
          alt="Mirrorless-camera"
        />
      </template>
      <template v-slot:names>
        <p class="card-text fs-5">Canon G5X</p>
      </template>

      <template v-slot:type>
        <p class="card-title">Type: Complex</p>
      </template>

      <template v-slot:content>
        <ul class="fw-light fs-6">
          <li>20.2MP 1" Stacked CMOS Sensor</li>
          <li>DIGIC 8 Image Processor</li>
          <li>5x Optical Zoom f/1.8-2.8 Lens</li>
          <li>24-120mm (35mm Equivalent)</li>
        </ul>
      </template>
    </Cards>
  </div>
</template>
<script>
import Cards from "../components/Cards.vue";
export default {
  name: "DSL-page",
  components: {
    Cards,
  },
};
</script>
<style scoped>
header {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 2rem;
}
#card-item img {
  width: 10rem;
}
</style>