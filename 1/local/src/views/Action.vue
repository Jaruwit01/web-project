<template>
    <div>
      <header>Action Camera</header>
      <div class="pages">
      <div v-for="(itemData, i) in items" :key="i" class="card m-3" >
        <div v-if="itemData.type === 'Action'">
          <Cards>
            <template v-slot:pictur>
              <img src="../assets/camera.png" />
            </template>
            <template v-slot:names>
              <p class="card-text fs-5">{{ itemData.name }}</p>
            </template>
  
            <template v-slot:type>
              <p class="card-title">Type: {{ itemData.type }}</p>
            </template>
  
            <template v-slot:content>
              <ul class="fw-light fs-6">
                <li v-for="(itemDetail, j) in itemData.details.split(' ')" :key="j">
                  {{ itemDetail }}
                </li>
              </ul>
            </template>
          </Cards>
        </div></div>
      </div>
    </div>
  </template>
  <script>
  import { api } from "../helpers/Helpers.js";
  import Cards from "../components/Cards.vue";
  export default {
    name: "DSL-page",
    data() {
      return {
        items: [],
      };
    },
    components: {
      Cards,
    },
    async mounted() {
        this.items = await api.getItems();
      }
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
  .pages {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      padding: 0 ;
      margin-left: 2%;
      margin-right: 2%;
  
    }
    .card{
        border: 0 ;
    }
  </style>
  