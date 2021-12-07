import axios from "axios";

const api = axios.create({
  baseURL: "https://devops-uat.sharedservices.local/api/cluster-service-status"
});

export default api;
