import axios from "axios";

export default class JobTitleService{
    getAllJobTitle(){
        return axios.get("http://localhost:8081/api/jobtitles/getall");
    }
}