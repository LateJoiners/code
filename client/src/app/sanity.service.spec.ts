import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SanityService } from './sanity.service';

describe('SanityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanityService],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([SanityService], (service: SanityService) => {
    expect(service).toBeTruthy();
  }));
});
