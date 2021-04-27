import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsApiService {

  readonly flashcardAPIUrl = "https://localhost:7177/api";

  constructor(private http: HttpClient) { }

  getFlashcardList(): Observable<any[]> {
    return this.http.get<any>(this.flashcardAPIUrl + '/Flashcards');
  }

  addFlashcard(data: any) {
    return this.http.post(this.flashcardAPIUrl + '/Flashcards', data);
  }

  updateFlashcard(id: number | string, data: any) {
    return this.http.put(this.flashcardAPIUrl + `/Flashcards/${id}`, data);
  }

  deleteFlashcard(id: number | string) {
    return this.http.delete(this.flashcardAPIUrl + `/Flashcards/${id}`);
  }

}
