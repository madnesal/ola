import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from "../Interfaces/stores.interface";

  @Injectable({
    providedIn:'root'
  })
  export class DataService{
    private apiURL='http://localhost:3000';
    constructor(private http: HttpClient){}

    getStores():Observable<Store[]>{
      return this.http.get<Store[]>(`${this.apiURL}/stores`)
    }
    saveOrder(order:any):Observable<any>{
      return this.http.post<any>(`${this.apiURL}/orders`, order);
    }
  }
