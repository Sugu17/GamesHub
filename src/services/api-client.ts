import axios, { AxiosRequestConfig, CreateAxiosDefaults } from "axios";

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

export default class APIClient<ResponseType> {
  apiClient = axios.create(axiosConfig);
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (queryData?: AxiosRequestConfig) => {
    return this.apiClient
      .get<DataResponse<ResponseType>>(this.endpoint, queryData)
      .then((response) => response.data);
  };
}
