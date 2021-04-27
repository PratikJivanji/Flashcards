import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { ShowFlashcardsComponent } from './flashcards/show-flashcards/show-flashcards.component';
import { AddEditFlashcardsComponent } from './flashcards/add-edit-flashcards/add-edit-flashcards.component'

import { FlashcardsApiService } from "./flashcards-api.service";

@NgModule({
  declarations: [
    AppComponent,
    FlashcardsComponent,
    ShowFlashcardsComponent,
    AddEditFlashcardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlashcardsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
