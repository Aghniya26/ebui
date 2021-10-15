import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwittersApiService {

  constructor(private http: HttpClient) { }

  getData(){
    let url='http://localhost:5000/twt/alltwt';
    return this.http.get<any>(url);
  }

  getDataById(id:number){


    let url='http://localhost:5000/twt/find-twt/'+id;
    return this.http.get<any>(url);
  }

  postData(input:any){
      let url='http://localhost:5000/twt/create-twt';
      return this.http.post<any>(url,input );
  }

  updateData(id:number, input:any){
    let url='http://localhost:5000/twt/update-twt/'+id;
    return this.http.put<any>(url,input );
}

  deleteData(id:number){
    let url='http://localhost:5000/twt/delete-twt/'+id;
    return this.http.delete<any>(url);
  }

}
