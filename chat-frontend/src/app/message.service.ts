import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private apiUrl = 'http://localhost:8080/api/messages';

  constructor(private http: HttpClient) {}

  sendMessage(msg: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, msg);
  }

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }
}
