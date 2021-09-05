import axios from "axios";

export default class educationService{

    add(education){
        const headers = {
            "Content-Type": "application/json",
          };
      return axios.post("http://localhost:8081/api/education/add",education,{headers});
    }

    getByCvIdAndGraduateDesc(id){
        return axios.get(`http://localhost:8081/api/education/getallbycvidgraduatedesc?id=${id}`);
    }

    deleteById(id){
        return axios.delete(`http://localhost:8081/api/education/delete?id=${id}`);
    }
}