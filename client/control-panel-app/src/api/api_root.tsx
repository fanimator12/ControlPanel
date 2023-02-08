import axios from "axios";

const api = axios.create({
  baseURL: `/controlpanel`,
});

export function getApiRoot() {
  return api;
}