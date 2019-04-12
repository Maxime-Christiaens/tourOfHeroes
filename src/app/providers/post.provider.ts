import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable()
export class PostProvider {
//The provider is only needed for 
    constructor(private http: HttpClient){}

    getPosts(params?: any): Observable<any> {
        return this.http.get(`${environment.url}/posts`, {params}).pipe(
            map(data => data)
        );
    }

    getPost(id: number, params?: any): Observable<any> {
        return this.http.get(`${environment.url}/posts/${id}`, {params}).pipe(
            map(data => {
                return data;
            })
        );
    }
}