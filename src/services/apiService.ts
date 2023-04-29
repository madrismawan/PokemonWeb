import axios, {type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { HttpService } from "./httpService";


export class ApiService implements HttpService {
  private axiosInstance: AxiosInstance;
  private $env = import.meta.env 

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.$env.VITE_BASE_URL,
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      }
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try{
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config);
      return response.data
    }catch(error: any){
      return error
    }
  }

  public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try{
      const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data, config)
      return response.data
    }catch(error: any){
      return error
    }
  }

  public async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try{
      const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data, config)
      return response.data
    }catch(error: any){
      return error
    }
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try{
      const response = await this.axiosInstance.delete<T>(url, config)
      return response.data
    }catch(error: any){
      return error
    }
  }
}