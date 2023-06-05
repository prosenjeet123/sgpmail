import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from './../../../environments/environment';
import { User } from './../../models/user.model';



@Injectable({ providedIn: 'root' })
export class BasicService {

  private emailSubject = new Subject<any>();
  public dataEmail$ = this.emailSubject.asObservable();

  httpHeader  = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': environment.dummyApiKey
    }),
  }

  constructor(private httpClient: HttpClient) {
    
   }

  getUsers(): Observable<User>{
    const url = 'https://dummyapi.io/data/v1/user?limit=20';
    return this.httpClient.get(url, this.httpHeader)
  }


  getEmails(): Observable<any>{
    const url = 'https://dummyapi.io/data/v1/post?limit=10';
    return this.httpClient.get(url, this.httpHeader)
  }

  getEmailbyId(id: string): Observable<any>{
    const url = `https://dummyapi.io/data/v1/post/${id}`;
    return this.httpClient.get(url, this.httpHeader)
  } 

  sendData(data: any) {
    this.emailSubject.next(data);
  }

}