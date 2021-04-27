import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlashcardsApiService } from 'src/app/flashcards-api.service';

@Component({
  selector: 'app-show-flashcards',
  templateUrl: './show-flashcards.component.html',
  styleUrls: ['./show-flashcards.component.css']
})
export class ShowFlashcardsComponent implements OnInit {
  flashcardList$!: Observable<any[]>;

  constructor(private service: FlashcardsApiService) { }

  ngOnInit(): void {
    this.flashcardList$ = this.service.getFlashcardList();
  }

  // Variables (properties)
  modalTitle: string = '';
  activateAddEditInspectionComponent: boolean = false;
  flashcard: any;
  toggle = true;
  isButtonVisible = true;

  modalAdd() {
    this.flashcard = {
      id: 0,
      question: null,
      answer: null,
    }
    this.modalTitle = "Add Flash Card";
    this.activateAddEditInspectionComponent = true;
  }

  modalEdit(item: any) {
    this.flashcard = item;
    this.modalTitle = "Edit Flash Card";
    this.activateAddEditInspectionComponent = true;
  }

  delete(item: any) {
    if (confirm(`Are you sure you want to delete inspection ${item.id}`)) {
      this.service.deleteFlashcard(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none"
          }
        }, 4000);
        this.flashcardList$ = this.service.getFlashcardList();
      })
    }
  }

  modalClose() {
    this.activateAddEditInspectionComponent = false;
    this.flashcardList$ = this.service.getFlashcardList();
  }

}
