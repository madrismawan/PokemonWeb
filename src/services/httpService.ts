export interface HttpService{
    get<T>(url: string, config?: any): Promise<T>
    post<T>(url: string, config?: any,data?: any ): Promise<T>
    put<T>(url: string, config?: any,data?: any ): Promise<T>
    delete<T>(url: string, config?: any,data?: any): Promise<T>
}