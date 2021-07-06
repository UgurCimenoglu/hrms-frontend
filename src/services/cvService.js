import axios from "axios";

export default class cvService {
  getAllByAltText() {
    return axios.get("http://localhost:8081/api/candidatecv/getall");
  }
}
