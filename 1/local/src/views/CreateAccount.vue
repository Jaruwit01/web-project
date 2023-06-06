<template lang="">
  <div class="container main" id="container-sign-up">
    <div class="text-dark- fw-bold fs-1 text-center mt-4 mb-1">
      Welcome to Camera Box
    </div>
    <div class="card" id="card-sign-up">
      <div class="card-body">
        <form ref="form" @submit="Create_account">
          <div class="mb-3">
            <div class="form-group was-validated">
              <label for="name" class="form-label"
                >What should we call you?</label
              >
              <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                placeholder="what your name ....."
                v-model="memberValue.name"
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="form-group "></div>
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Enter your username ....."
              v-model="memberValue.username"
            />
          </div>
          <div class="mb-3">
            <div class="form-group ">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                pale
                placeholder="Enter your email ....."
                v-model="memberValue.email"
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="form-group">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="Enter your password ....."
                v-model="memberValue.password"
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="form-group">
              <label for="confirm_password" class="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                class="form-control"
                placeholder="confirm password ....."
              />
            </div>
          </div>
          <div class="mb-3">
            <div class="form-group form-check">
              <input
                type="checkbox"
                id="agree-check"
                class="form-check-input"
                value=""
                checked
              />
              <label
                for="agree-check"
                class="form-check-label"
                id="label-sign-up"
                >I agree to the terms and conditions?
                <a href="#" class="text-success">agreement</a></label
              >
            </div>
          </div>
          <div id="btn">
            <!-- <router-link to="/member"> -->
            <button class="btn btn-secondary me-3" id="cancel-btn">
              Cancel
            </button>
            <!-- </router-link> -->

            <!-- <router-link to="/member"> -->
            <button class="btn btn-success me-3" id="create-btn" >Create</button>
            <!-- </router-link> -->
          </div>
        </form>
      </div>
    </div>
    <div v-html="account"></div>
  </div>
</template>
<script>
export default {
  name: "CreateAccount",
  props: {
    member: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: "",
          username: "",
          email: "",
          password: "",
          confirm_password: "",
        }
      },
      },
    },
    data() {
      return {
        errorsPresent: false,

      }
    },
    methods: {
        onSubmit: function() {
            if (this.member.name === "" || this.member.type === "") {
                this.errorsPresent = true;
            } else {
                this.errorsPresent = false;
                this.$emit('createOrUpdate', this.member);
            }
        },
    },
    computed: {
        memberValue: {
            get() {
                return this.member;
                },
            set(newValue) {
                    this.$emit("update:item", newValue);
            },
        }
    }
  }

</script>

<style scoped>
#card-sign-up,
#create-box {
  max-width: 600px;
  margin: 10px;
}

#label-sign-up {
  font-size: 15px;
  font-weight: 250;
  margin: 0 auto;
  margin-bottom: 10px;
}
#container-sign-up {
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#username,
#password,
#confirm_password {
  max-width: 500px;
  height: 2.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 10px;
}
#cancel-btn,
#create-btn {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 250;
  margin: 0 auto;
  margin-bottom: 10px;
}
#btn {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  margin: 0 0 2%;
}
</style>
