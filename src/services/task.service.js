import axios from "axios";
import { BASEURL } from "../constants/urls";

export default class TaskService {
  getTasks() {
    return axios.get(`${BASEURL}/api/v1/todos`);
  }

  addTask(data) {
    return axios.post(`${BASEURL}/api/v1/todos`, data);
  }
}
