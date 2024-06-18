import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzMathGameComponent } from './ez-math-game.component';

describe('EzMathGameComponent', () => {
  let component: EzMathGameComponent;
  let fixture: ComponentFixture<EzMathGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EzMathGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EzMathGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
