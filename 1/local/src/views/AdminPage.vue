<template>
    <AdminAdd @createOrUpdate="createOrUpdate"></AdminAdd>
</template>
<script>
import { api } from '../helpers/Helpers';
import AdminAdd from '../components/AdminAdd.vue';
export default{
    name: 'Admin-page',
    components:{
        AdminAdd
    },
    createOrUpdate: async function(item){
            const res = await api.createItem(item);
            this.flash('item created successfully', 'success')
            this.$router.push(`/admin-page/${res._id}`)
        }
}
</script>
<style scoped>
</style>