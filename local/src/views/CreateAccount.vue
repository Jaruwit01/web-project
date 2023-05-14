<template lang="">
  <div class="container main" id="container-sign-up">
    <div class="text-dark- fw-bold fs-1 text-center mt-4 mb-1">
      Welcome to Camera Box
    </div>
    <div class="card" id="card-sign-up">
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label"
              >What should we call you?</label
            >
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="what your name ....."
            />
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="usernmae"
              class="form-control"
              placeholder="Enter your username ....."
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="Enter your email ....."
            />
          </div>
          <div class="mb-3">
            <label for="pass" class="form-label">Password</label>
            <input
              type="password"
              id="pass"
              class="form-control"
              placeholder="Enter your password ....."
            />
          </div>
          <div class="mb-3">
            <label for="pass" class="form-label">Confirm Password</label>
            <input
              type="password"
              id="pass"
              class="form-control"
              placeholder="confirm password ....."
            />
          </div>
          <div class="mb-3">
            <input type="checkbox" id="agree-check" class="form-check-input" />
            <label for="agree-check" class="form-check-label" id="label-sign-up"
              >I agree to the terms and conditions?
              <a href="#" class="text-success">agreement</a></label
            >
          </div>
          <div id="btn">
            <router-link to="/member">
              <button
                type="button"
                class="btn btn-secondary me-3"
                id="cancel-btn"
              >
                Cancel
              </button>
            </router-link>

            <router-link to="/member">
              <button
                type="button"
                class="btn btn-success me-3"
                id="create-btn"
                @click="Create_account"
              >
                Create
              </button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateAccount",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      agree: false,
    };
  },
  methods: {
    Create_account() {
      fetch("/api/create")
        .then((res) => res.text())
        .then((result) => (this.name = result))
        .catch((err) => console.log(err));
    },
  },
};
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
#pass {
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
