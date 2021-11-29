import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Content } from '../helper-files/content-interface';
import { MessageService } from './message.service';
import {CONTENT_LIST} from "../helper-files/contentDB";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  constructor(
  private messageService: MessageService,
  private  http: HttpClient) {

  }

  // synchronous
  getContents(): Content[] {
    return CONTENT_LIST;
  }

  // asynchronous
  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    // return of(CONTENT_LIST);
    return this.http.get<Content[]>('api/content');
  }
  addNewContent(content: Content ): Observable<Content> {
    this.messageService.add(`Content added:  ${content.title}`);
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }
  updateContent(content: Content): Observable<Content> {
    this.messageService.add(`Content updated: ${content.title}`);
    return this.http.put<Content>('api/content', content, this.httpOptions);
  }
  getContent(id: number) : Observable<Content> {
    return this.http.get<Content>('api/content/' + id);
  }
}
