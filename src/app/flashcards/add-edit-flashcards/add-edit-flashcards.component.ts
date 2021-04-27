import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlashcardsApiService } from 'src/app/flashcards-api.service';

@Component({
  selector: 'app-add-edit-flashcards',
  templateUrl: './add-edit-flashcards.component.html',
  styleUrls: ['./add-edit-flashcards.component.css']
})
export class AddEditFlashcardsComponent implements OnInit {
  flashcardList$!: Observable<any[]>;

  constructor(private service: FlashcardsApiService) { }

  @Input() flashcard: any;
  id: number = 0;
  question: string = "";
  answer: string = "";

  ngOnInit(): void {
    this.id = this.flashcard.id;
    this.question = this.flashcard.question;
    this.answer = this.flashcard.answer;
    this.flashcardList$ = this.service.getFlashcardList();
  }

  addFlashcard() {
    var flashcard = {
      question: this.question,
      answer: this.answer,
    }
    this.service.addFlashcard(flashcard).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateFlashcard() {
    var flashcard = {
      id: this.id,
      question: this.question,
      answer: this.answer,
    }
    var id: number = this.id;
    this.service.updateFlashcard(id, flashcard).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
