<template>
    <div>
        <header class="text-center fs-1">Edit Camera</header>
        <flash-message></flash-message>
        <AdminAdd @createOrUpdate="createOrUpdate" :item="this.item"></AdminAdd>
    </div>
</template>
<script>
import AdminAdd from '../components/AdminAdd.vue'
import { api } from '../helpers/Helpers.js'

export default {
    name: "edit-item",
    components: {
        AdminAdd
    },
    data(){
        return{
            item: {}
        }
    },
    methods:{
        createOrUpdate: async function(item){
            await api.updateItem(item);
            this.flashMessage.success('Item updated successfully!', 'success');
            this.$router.push(`/admin-page/${item._id}`);
            
    }
},
    async mounted(){
        this.item = await api.getItem(this.$route.params.id);
    }
}

</script>