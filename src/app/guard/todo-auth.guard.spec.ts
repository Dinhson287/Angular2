import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { todoAuthGuard } from './todo-auth.guard';

describe('todoAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => todoAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
