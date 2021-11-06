import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Content } from '../helper-files/content-interface';
import { MessageService } from './message.service';
import {CONTENT_LIST} from "../helper-files/contentDB";

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private messageService: MessageService) {}

  // synchronous
  getContents(): Content[] {
    return CONTENT_LIST;
  }

  // asynchronous
  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(CONTENT_LIST);
  }
}
