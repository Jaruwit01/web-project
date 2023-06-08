<template>
    <div>
      <header class="text-center mt-4 fs-1">Camera Item</header>
      <flash-message></flash-message>
      <div v-if="items.length > 0" class="page ">
        <div v-for="(itemData, i) in items" :key="i" class="card m-3 " >
          <Cards>
            <template v-slot:pictur>
              <img />
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
          <div class="btn">
            <router-link  :to="{name:'edit-item', params:{id: itemData._id}}">
                <button class="btn btn-light rounded-3 bg-warning text-white">edit</button>
            </router-link>
          <button class="btn btn-light rounded-3 bg-danger " @click.prevent="onDestroy(itemData._id)"><a :href="`/admin-page/${itemData._id}`" class="text-white">delete</a></button>
          </div>
            
        </div>
      </div>
      <div v-else>
        <h1 class="text-center mt-4">No Item</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { api } from "../helpers/Helpers.js";
  import Cards from "../components/Cards.vue";
  export default {
    name: "admin-page",
    data() {
      return {
        items: [],
      };
    },
    components: {
      Cards,
    },
    methods: {
      async onDestroy(id) {
        const sure = window.confirm(`Are you sure? ${id}`);
        if (!sure) return;
        await api.deleteItem(id);
        this.flash("Item deleted successfully!", "success");
        const newItems = this.items.filter(itemData => itemData._id !== id);
        this.items = newItems;
      }
    },
    async mounted() {
      this.items = await api.getItems();
    }
  };
  </script>
  
  <style scoped>
  .page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 20px;
  }
  button{
    max-width: 100px;
    margin: 20px;
  }
  
</style>
  