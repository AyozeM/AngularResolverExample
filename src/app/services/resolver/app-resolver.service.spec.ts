import { TestBed } from '@angular/core/testing';

import { AppResolverService } from './app-resolver.service';

describe('AppResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppResolverService = TestBed.get(AppResolverService);
    expect(service).toBeTruthy();
  });
});
