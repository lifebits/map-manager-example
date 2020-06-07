import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task, TaskMarker } from '../../models/base.models';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient) {
  }

  getTaskList(): Observable<Task[]> {
    const url = environment.baseApi + '/tasks/load';
    return this.http.get<Task[]>(url);
  }

  getTaskMarkerList(): Observable<TaskMarker[]> {
    const url = environment.baseApi + '/tasks/simple';
    return this.http.get<TaskMarker[]>(url);
  }

}
