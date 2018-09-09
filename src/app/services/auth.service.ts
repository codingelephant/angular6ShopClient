import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL , PUBLIC_URL } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+localStorage.getItem("_token")
 })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  register(data){
    let url = API_URL+"/auth/register";
    return this.http.post(url , data, httpOptions);
  }

  login(data){
    let url = API_URL+"/auth/login";
    return this.http.post(url, data, httpOptions);
  }

  refreshToken(){
    let url = API_URL+"/auth/refresh";
    return this.http.post(url, {}, httpOptions);
  }

  saveUser(user,token){
    localStorage.setItem("_user",JSON.stringify(user));
    localStorage.setItem("_token",token);
  }

  user(){
    let user = localStorage.getItem("_user");
    if(user){
       user = JSON.parse(user);
       return user;
    }
    return false;
  }

  getProfile(){
    let url = API_URL+"/auth/account";
    return this.http.get(url , httpOptions);
  }

  updateProfile(formData){
    let url = API_URL+"/auth/account";
    return this.http.put(url ,formData, httpOptions);
  }

   isLoggedIn(){
    let token = localStorage.getItem("_token");
    return token ? true : false;
   }

   logOut(){
    localStorage.removeItem("_token");
    localStorage.removeItem("_user");
    let url = API_URL+"/auth/logout";
    return this.http.post(url , {}, httpOptions);
   }




}
