import axios from "axios";
import Vue from "vue";
import VueFlashMessage from "vue-flash-message";
import "vue-flash-message/dist/vue-flash-message.min.css";

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true,
  },
});

const vm = new Vue();

const baseURL = "http://localhost:3000/admin-page";

const handleError = (fn) => (...params) =>
  fn(...params).catch((error) => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, "error");
  });

export const api = {
  createItem: handleError(async (payload) => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  getItems: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleteItem: handleError(async (id) => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  getItem: handleError(async (id) => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  updateItem: handleError(async (payload) => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  }),
  signIn: handleError(async (payload) => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
};
