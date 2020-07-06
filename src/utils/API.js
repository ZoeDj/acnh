import axios from "axios";

const BASEURL = "https://acnhapi.com/v1/villagers/";

export default {
  getRandomVillager: function () {
    return axios.get(BASEURL);
  },
};
