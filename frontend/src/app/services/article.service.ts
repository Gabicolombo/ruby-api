import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  listArticle(){
    return this.http.get(`${this.url}/api/v1/articles`);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  addArticle(data: any){
    return this.http.post(`${this.url}/api/v1/articles`, data, 
      this.httpOptions);
  }

  findArticle(id: any){
    return this.http.get(`${this.url}/api/v1/articles/${id}`);
  }

  updateArticle(body: any, id: any){
    return this.http.put(`${this.url}/api/v1/articles/${id}`, body, this.httpOptions);
  }

  deleteArticle(id: any){
    return this.http.delete(`${this.url}/api/v1/articles/${id}`);
  }

}
