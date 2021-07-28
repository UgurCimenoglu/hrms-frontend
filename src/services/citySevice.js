import axios from "axios";

export default class CityService {
  getAllCities() {
    return axios.get("http://localhost:8081/api/city/getall");
  }
}
