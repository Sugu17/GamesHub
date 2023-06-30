import axios, { CreateAxiosDefaults } from "axios";

export interface DataResponse<T> {
  count: number;
  results: T[];
}

const axiosConfig: CreateAxiosDefaults = {
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ad1edeff9064f8b99f920a734a190ab",
  },
};

const apiClient = axios.create(axiosConfig);
export default apiClient;
