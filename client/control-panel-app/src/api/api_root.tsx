import axios from "axios";

const api = axios.create({
  baseURL: `/controlpanels/`,
});

export function getApiRoot() {
  return api;
}