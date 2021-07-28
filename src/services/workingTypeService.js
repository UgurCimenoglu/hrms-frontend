import axios from "axios";

export default class WorkingTypeService {
  getAllWorkingType() {
    return axios.get("http://localhost:8081/api/workingtype/getall");
  }
}
