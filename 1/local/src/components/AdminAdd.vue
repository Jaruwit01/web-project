<template>
  <div class="container main" id="container-addItem">
    <div class="text-dark fw-bold fs-1 text-center mt-4 mb-1">Add a Camera</div>
    <div class="card" id="card-addItem">
      <div class="card-body">
        <p v-if="errorsPresent" class="error text-warning">please fill out both fields!</p>
        <form action="#" @submit.prevent="onSubmit">
          <div class="mb-3">
            <div class="from-group">
              <label for="picture" class="form-label">Picture of Camera</label>
              <input type="file" id="picture" class="form-control" />
            </div>
          </div>
          <div class="mb-3">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Enter camera name ....."
                v-model="itemValue.name"
              >
            </div>
          </div>
          <div class="mb-3">
            <div class="form-group">
              <label for="type" class="form-label">type</label>
              <select class="form-select" aria-label="Default select example" id="type" v-model="itemValue.type">
                <option selected>DSLR</option>
                <option value="1">Mirrorless</option>
                <option value="2">Complex</option>
                <option value="3">Action</option>
                <option value="4">Film</option>
                <option value="5">Instant</option>
                <option value="6">Camcroder</option>
              </select>
            </div>
          </div>
          <div class="mb-3">
                <div class="form-group">
                    <label for="details" class="form-label">Detail of Camera</label>
                    <textarea class="form-control" id="details" rows="3" v-model="itemValue.details"></textarea>
                </div>
          </div>
          <div class="col-md-6">
                <button type="submit" class="btn btn-light rounded-3 border " id="btn-submit" formaction="/home/page.html">Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin-add",
  props:{
    item:{
        type: Object,
        required: false,
        default: () => {
            return {
                name: "",
                type: "",
                details: "",
                picture: "",
            }
        }
    }
  },
    data() {
        return {
        errorsPresent: false,
        itemValue:{
          ...this.item
        }
        };
    },
    methods: {
        onSubmit: function() {
            if (this.item.name === "" || this.item.type === "") {
                this.errorsPresent = true;
            } else {
                this.errorsPresent = false;
                this.$emit('createOrUpdate', this.item);
            }
        }
    },

}
</script>

<style scoped> 
</style>
