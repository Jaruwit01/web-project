<template>
    <AdminAdd @createOrUpdate="createOrUpdate"></AdminAdd>
</template>
<script>
import AdminAdd from '../components/AdminAdd.vue'
import { api } from '../helpers/Helpers.js'

export default {
    name: "add-item",
    components: {
        AdminAdd
    },
    methods:{
        createOrUpdate: async function(items){
            const res = await api.createItem(items);
            this.flashMessage.success('Item created successfully!', 'success');
            this.$router.push(`/admin-add/${res._id}`);
    }
    }
}
</script>
<style scoped>

</style>