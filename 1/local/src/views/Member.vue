<template>
    <div class="container main " id="container-sign-in">
      <div class="text-dark fw-bold fs-1 text-center mt-4 mb-1">
        Sign In to Camera Box
      </div>
      <div class="card" id="card-sign-in">
        <div class="card-body">
          <form @submit.prevent="signIn">
            <div class="mb-3">
              <div class="form-group was-validated">
                <label for="Email" class="form-label">Email</label>
                <input
                  type="text"
                  v-model="email"
                  class="form-control"
                  placeholder="Enter your username ..."
                  required
                />
              </div>
              <div class="invalid-feedback">
                Please enter your email.
              </div>
            </div>
            <div class="mb-3">
              <div class="form-group was-validated">
                <label for="pass" class="form-label">Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  placeholder="Enter your password ..."
                  required
                />
              </div>
              <div class="invalid-feedback">
                Please enter your password.
              </div>
            </div>
            <div class="mb-3">
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  v-model="rememberPassword"
                  id="agree-check"
                  class="form-check-input me-2"
                />
                <label for="agree-check" class="form-check-label" id="check-label">
                  Remember password
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-light rounded-3 border" id="btn-sign-in">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      <p class="text-center border border-dark rounded-3 p-2" id="create-box">
        New to Camera Box?
        <router-link to="/signUp" class="text-success"> Create account</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import { api } from '../helpers/Helpers';
  
  export default {
    name: 'Member-Page',
    data() {
      return {
        email: '',
        password: '',
        rememberPassword: false,
      };
    },
    methods: {
      signIn() {
        if (!this.rememberPassword) {
          // กรุณาเลือก checkbox ก่อน Sign In
          this.$flash('Please check the Remember password checkbox before signing in', 'error');
          return;
        }
  
        const payload = {
          email: this.email,
          password: this.password,
        };
  
        api.signIn(payload)
          .then((response) => {
            // กระบวนการหลังจากเข้าสู่ระบบสำเร็จ
            console.log(response.data);
          })
          .catch((error) => {
            // กระบวนการหลังจากเข้าสู่ระบบไม่สำเร็จ
            console.error(error);
          });
      },
    },
  };
  </script>
<style scoped>
    #card-sign-in, #create-box{
    max-width: 600px;
    margin: 10px;
}

#label-sign-in{
    font-size: 15px;
    font-weight: 250;
    margin: 0 auto;
    margin-bottom: 10px;
}
#container-sign-in{
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

#username, #pass {
    max-width:500px;
    height: 2.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 10px;
}
</style>