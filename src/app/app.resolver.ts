import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TodoProvider } from './providers/provide.provider';
import { Observable } from 'rxjs';

@Injectable()
export class TodoResolver implements Resolve<any> {
  constructor(private todoProvider: TodoProvider) {}
 
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (route.paramMap.get('id')) {
      return this.todoProvider.getTodo(parseInt(route.paramMap.get('id'), 10));
    }
    return this.todoProvider.getTodos();
  }
}

