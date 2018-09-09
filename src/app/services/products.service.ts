import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { API_URL , PUBLIC_URL } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products:any;
  constructor(private http: HttpClient) {
              
   }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  serialize(obj) {
    var str = [];
    for (var p in obj){
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    
    return str.join("&");
  }

   getAll(query={}){
    let qstr = this.serialize(query);
    let url = API_URL+"/products?"+qstr;
    return this.http.get(url ,httpOptions)
    .pipe(
      tap(products => console.log('fetched products')),
      catchError(this.handleError('getProducts', []))
    );
    // return an Observable
   }

   getOne(id){
    let url = API_URL+"/products/"+id;
    return this.http.get(url ,httpOptions);
   }

   getURL(img_name){
   return PUBLIC_URL+"uploads/products/"+img_name;
   }



}
