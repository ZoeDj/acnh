import axios from "axios";

const BASEURL = "https://acnhapi.com/v1a/villagers/";

export default {
  getRandomVillager: function () {
    return axios.get(BASEURL);
  },
};
