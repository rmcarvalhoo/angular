import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envroinment } from '../../envroinments/envroinments';
import { Comment } from '../Comment';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }

  private baseApiUrl = envroinment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  createComment(data: Comment): Observable<Response<Comment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Comment>>(url, data);
  }

}
