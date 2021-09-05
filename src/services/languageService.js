import axios from "axios";

export default class LanguageService {
  getAllByCvId(cvId) {
    return axios.get(
      `http://localhost:8081/api/language/getallbycvid?cvId=${cvId}`
    );
  }

  add(language){
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post("http://localhost:8081/api/language/add",language,{headers})
  }
}
