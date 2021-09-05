import axios from "axios";

export default class SkillService {
  getAllByCvId(id) {
    return axios.get(`http://localhost:8081/api/skill/getallbycvid?cvId=${id}`);
  }

  add(skill) {
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post("http://localhost:8081/api/skill/add", skill, {
      headers,
    });
  }
}
