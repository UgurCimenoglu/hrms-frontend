import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisements() {
    return axios.get("http://localhost:8081/api/jobadvertisements/getall");
  }

  addJobAdvertisement(object) {
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post(
      "http://localhost:8081/api/jobadvertisements/add",
      object,
      { headers }
    );
  }

  getById(id) {
    return axios.get(
      `http://localhost:8081/api/jobadvertisements/getbyid?id=${id}`
    );
  }

  getAllByIsActiveAndEmployerId(employerId, isActive) {
    return axios.get(
      `http://localhost:8081/api/jobadvertisements/findAllByIsActiveAndEmployerId?employerId=${employerId}&isActive=${isActive}`
    );
  }

  deleteById(id) {
    return axios.delete(
      `http://localhost:8081/api/jobadvertisements/delete?id=${id}`
    );
  }
}
