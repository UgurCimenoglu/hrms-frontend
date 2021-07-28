import axios from "axios";

export default class WorkingTimeService {
  getAllWorkingTime() {
    return axios.get("http://localhost:8081/api/workingtime/getall");
  }
}
