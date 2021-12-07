import { Component } from '@angular/core';
import { ContentService } from './services/content.service';
import { LogUpdateService } from './services/log-update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  constructor(private logService: LogUpdateService)  {}
}
