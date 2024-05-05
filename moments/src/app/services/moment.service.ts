import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';
import { Response } from '../Response';

import { envroinment } from '../../envroinments/envroinments';


@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = envroinment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;
    
  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeMoment(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Response<Moment>>(url);
  }

  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
