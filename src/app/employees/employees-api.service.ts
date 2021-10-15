import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesApiService {

  constructor(private http: HttpClient) { }

  getData(){
    let url='http://localhost:5000/emp/allemp';
    return this.http.get<any>(url);
  }

  getDataById(id:number){


    let url='http://localhost:5000/emp/find-emp/'+id;
    return this.http.get<any>(url);
  }

  postData(input:any){
      let url='http://localhost:5000/emp/create-emp';
      return this.http.post<any>(url,input );
  }

  updateData(id:number, input:any){
    let url='http://localhost:5000/emp/update-emp/'+id;
    return this.http.put<any>(url,input );
}

  deleteData(id:number){
    let url='http://localhost:5000/emp/delete-emp/'+id;
    return this.http.delete<any>(url);
  }


}
