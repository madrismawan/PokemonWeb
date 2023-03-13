import axios, {type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { ApiResponse } from "../interfaces/+responseAPI"; 	

class ApiService {
  private axiosInstance: AxiosInstance;
  private $env = import.meta.env 

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.$env.VITE_BASE_URL
    });
  }

  private handleResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
    const apiResponse: ApiResponse<T> = {
      status: response.status >= 200 && response.status < 300,
      message: response.statusText,
      data: response.data,
    };
    return apiResponse;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try{
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config);
      return this.handleResponse(response)
    }catch(error: any){
      return this.handleResponse(error.response)
    }
  }

  public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try{
      const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data, config)
      return this.handleResponse(response)
    }catch(error: any){
      return this.handleResponse(error.response)
    }
  }

  public async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try{
      const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data, config)
      return this.handleResponse(response)
    }catch(error: any){
      return this.handleResponse(error.response)
    }
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try{
      const response = await this.axiosInstance.delete<T>(url, config)
      return this.handleResponse(response)
    }catch(error: any){
      return this.handleResponse(error.response)
    }
  }

}

export default ApiService;