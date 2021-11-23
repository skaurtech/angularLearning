import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
newContent: Content;
  constructor(public dialogBox: MatDialogRef<AddContentComponent>) {
    this.newContent = {
      id: 0,
      title: '',
      body: '',
      author: '',
      imgUrl: '',
      type: '',
      tags: [],
    };
  }

  onNoClick(): void {
    this.dialogBox.close();
  }

  ngOnInit(): void {
  }

}
