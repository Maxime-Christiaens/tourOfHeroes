import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable()
export class TodoProvider {
//The provider is only needed for 
    constructor(private http: HttpClient){}

    getTodos(params?: any): Observable<any> {
        return this.http.get(`${environment.url}/todos`, {params}).pipe(
            map(data => data)
        );
    }

    getTodo(id: number, params?: any): Observable<any> {
        return this.http.get(`${environment.url}/todos/${id}`, {params}).pipe(
            map(data => data)
        );
    }
}