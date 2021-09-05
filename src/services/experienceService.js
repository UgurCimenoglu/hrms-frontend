import axios from "axios";

export default class ExperienceService {
  
  getAllByCvIdLeaveDateDesc(id) {
    return axios.get(
      `http://localhost:8081/api/experience/getallbycviddesc?cvId=${id}`
    );
  }

  add(experience){
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post(`http://localhost:8081/api/experience/add`,experience,{headers});
  }
}
