import axios from "axios";

export const $api = axios.create({
  baseURL: "https://test.v5.pryaniky.com",
});
