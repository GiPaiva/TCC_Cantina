import axios from "axios";
import config from "./ui/components/Config/config";

const api = axios.create({
  baseURL: config.apiURL,
});

export default class Service{
  getBaseURL() {
    return api.getUri();
  }

  async listProd() {
    const response = await api.get("/");
    return response;
  }
}