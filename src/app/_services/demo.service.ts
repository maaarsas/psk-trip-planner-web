import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DemoService {
  constructor(private http: HttpClient) { }

  demo() {
    return this.http.get<string>(`${environment.apiUrl}/demo`);
  }
}
