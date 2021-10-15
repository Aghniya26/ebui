import { TestBed } from '@angular/core/testing';

import { TwittersApiService } from './twitters-api.service';

describe('TwittersApiService', () => {
  let service: TwittersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwittersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
