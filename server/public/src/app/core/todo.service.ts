import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  GetAll:() => Observable<Todo[]> = () => this.http.get<Todo[]>('/todos');

  NewTodo:(todo: Todo) => Observable<Todo> = (todo) => this.http.post<Todo>('/post', todo);
}
