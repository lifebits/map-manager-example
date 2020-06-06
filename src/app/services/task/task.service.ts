import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient) {
  }

  getTaskList() {
    // http://api.mystreet.site/tasks/load
    const url = environment.baseApi + '/tasks/load';
    return this.http.get(url);
  }

}
