import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExampleDialogComponent } from './example-dialog.component';

@Component({
  selector: 'app-root',
  template: '<button (click)="openDialog()">Open dialog</button>'
})
export class AppComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ExampleDialogComponent, {
      data: { name: 'Garfield' }
    });
  }

}
