import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { API_URL } from '../config'

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  registerUser(json){
    let url = API_URL+"/auth/register";
    let headers = new HttpHeaders({
      "Content-Type": "application/json;charset=UTF-8"
    });
    return this.http.post(url, json,{ 
        headers: headers 
    });
  }

  loginUser(json){
    let url = API_URL+"/auth/login";
    let headers = new HttpHeaders({
      "Content-Type": "application/json;charset=UTF-8"
    });
    return this.http.post(url, json,{ 
        headers: headers 
    });
  }

  getUser(){
    let url = API_URL+"/auth/me";
    let headers = new HttpHeaders({
      "Content-Type": "application/json;charset=UTF-8",
      'Accept': 'application/json',
      "Authorization": localStorage.getItem("token")
    });
    return this.http.get(url, { 
        headers: headers 
    });
  }

  getRequest(url){
    let headers = new HttpHeaders({
        "Content-Type": "application/json;charset=UTF-8"
    });
    return this.http.get(url, { 
        headers: headers 
    });
  }

}
