import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  getData(){
    let url='http://localhost:5000/news/allnews';
    return this.http.get<any>(url);
  }

  getDataById(id:number){


    let url='http://localhost:5000/news/find-news/'+id;
    return this.http.get<any>(url);
  }

  postData(input:any){
      let url='http://localhost:5000/news/create-news';
      return this.http.post<any>(url,input );
  }

  updateData(id:number, input:any){
    let url='http://localhost:5000/news/update-news/'+id;
    return this.http.put<any>(url,input );
}

  deleteData(id:number){
    let url='http://localhost:5000/news/delete-news/'+id;
    return this.http.delete<any>(url);
  }

  searchByTitle(input:string){


    let url='http://localhost:5000/news/search-news/'+input;
    return this.http.get<any>(url);
  }

}
