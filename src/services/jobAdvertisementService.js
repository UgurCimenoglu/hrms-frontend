import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisements() {
    return axios.get("http://localhost:8081/api/jobadvertisements/getall");
  }
}
