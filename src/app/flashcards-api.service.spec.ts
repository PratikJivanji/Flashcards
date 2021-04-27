import { TestBed } from '@angular/core/testing';

import { FlashcardsApiService } from './flashcards-api.service';

describe('FlashcardsApiService', () => {
  let service: FlashcardsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
