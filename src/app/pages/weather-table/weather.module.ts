import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [ ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
export class AppRoutingModule {}
