import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";

const api = axios.create({
  baseURL: baseURL + `controlpanel`,
});

export function getApiRoot() {
  return api;
}
