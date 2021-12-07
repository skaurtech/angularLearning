import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {ContentService} from "../services/content.service";
import {AddContentComponent} from "../add-content/add-content.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
@Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();
newContent: Content;

error?: string;
  constructor(private contentService: ContentService,
              public  dialog: MatDialog,
              public snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }
  onAddNews() {
    if (
      this.newContent.body &&
      this.newContent.title &&
      this.newContent.author
    ) {
      this.snackBar.open('News has been added!');
      this.error = undefined;
      this.contentService
        .addNewContent(this.newContent)
        .subscribe((serverContent) => {
          this.newContent = serverContent;
          this.newContentEvent.emit(this.newContent);
          console.log(this.newContent.title);
        });
    } else {
      this.error = `You need to add all required fields: ${
        this.newContent.title ? '' : 'title'
      } ${this.newContent.body ? '' : 'body'} ${
        this.newContent.author ? '' : 'author'
      }`;
    }
  }
  // onAddNews(
  //   title: string,
  //   body: string,
  //   author: string,
  //   imgUrl: string,
  //   type: string,
  //   tags: string
  // ) {
  //   this.newContent = {
  //     id: 0,
  //     title: title,
  //     body: body,
  //     author: author,
  //     imgUrl: imgUrl,
  //     type: type,
  //     tags: [tags]
  //   };
  //   if (body && title && author) {
  //     this.error = undefined;
  //     this.contentService
  //       .addNewContent(this.newContent)
  //       .subscribe((serverContent) => {
  //         this.newContent = serverContent;
  //         this.newContentEvent.emit(this.newContent);
  //         console.log(this.newContent.title);
  //       });
  //   } else {
  //     this.error = `You need to add all required fields: ${
  //       title ? '' : 'title,'
  //     } ${body ? '' : 'body, and'} ${author ? '' : 'author'}`;
  //   }
  // }
  // onUpdateNews(
  //   id: string,
  //   title: string,
  //   body: string,
  //   author: string,
  //   imgUrl: string,
  //   type: string,
  //   tags: string
  // ) {
  //   this.newContent = {
  //     id: +id,
  //     title: title,
  //     body: body,
  //     author: author,
  //     imgUrl: imgUrl,
  //     type: type,
  //     tags: [tags],
  //   };
  //
  //   console.log(this.newContent);
  //
  //   if (body && title && author) {
  //     this.error = undefined;
  //     this.contentService
  //       .updateContent(this.newContent)
  //       .subscribe((response) => {
  //         console.log(response);
  //       });
  //   } else {
  //     this.error = `You need to add all required fields: ${
  //       title ? '' : 'title,'
  //     } ${body ? '' : 'body, and'} ${author ? '' : 'author'}`;
  //   }
  // }
  onUpdateNews() {
    this.newContent.id = +this.newContent.id;

    console.log(this.newContent);

    if (
      this.newContent.body &&
      this.newContent.title &&
      this.newContent.author
    ) {
      this.error = undefined;
      this.contentService
        .updateContent(this.newContent)
        .subscribe((response) => {
          console.log(response);
        });
    } else {
      this.error = `You need to add all required fields: ${
        this.newContent.title ? '' : 'title'
      } ${this.newContent.body ? '' : 'body'} ${
        this.newContent.author ? '' : 'author'
      }`;
    }
  }

  openAddNewsDialog() {
    const newsDialog = this.dialog.open(AddContentComponent, {
      width: '600px',
    });
    newsDialog.afterClosed().subscribe((newsFromDialog) => {
      console.log(newsFromDialog);
      this.newContent = newsFromDialog;
      if (this.newContent) {
        this.onAddNews();
        console.log(this.newContent);
      }
    });
  }
}


//   let promiseToAddNews = new Promise((success, fail) => {
  //     if (body && title && author) {
  //       this.error = undefined;
  //       this.newContentEvent.emit(this.newContent);
  //       success(`Added! - ${this.newContent.title}`);
  //     } else {
  //       this.error = `please fill the required fields: ${
  //         title ? '' : 'title, '
  //       } ${body ? '' : 'body,'} ${author ? '' : ' and author'}`;
  //       fail(this.error);
  //     }
  //   });
  //
  //   promiseToAddNews
  //     .then((successMessage) => console.log(successMessage))
  //     .catch((failMessage) => console.log(failMessage));

