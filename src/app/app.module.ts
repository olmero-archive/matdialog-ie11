import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ExampleDialogComponent } from './example-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    ExampleDialogComponent
  ],
  entryComponents: [
    ExampleDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
