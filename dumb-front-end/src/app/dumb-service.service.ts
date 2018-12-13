import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Course {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DumbServiceService {

  constructor(private http: HttpClient) { }

  getCourse(): Observable<Course[]> {
    let response = this.http.get<Course[]>('http://localhost:3000');
    console.log(response);
    return response;
  }
}

