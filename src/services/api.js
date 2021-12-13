import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8080/api/cluster-service-status",
  baseURL: "https://api.nn.uatesb.local/api/cluster-service-status",
});

export class Service {
  ListServicesStatus = async () => {
    return api.get("/v1/services/status");
  };

  SearchServiceStatusByName = async (name, namespace) => {
    return api.get("/v1/services/status/" + name + "?namespace=" + namespace);
  };
}

export default Service;
