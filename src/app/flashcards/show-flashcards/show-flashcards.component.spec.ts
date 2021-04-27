import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFlashcardsComponent } from './show-flashcards.component';

describe('ShowFlashcardsComponent', () => {
  let component: ShowFlashcardsComponent;
  let fixture: ComponentFixture<ShowFlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFlashcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
