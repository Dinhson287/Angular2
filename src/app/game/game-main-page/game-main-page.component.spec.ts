import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMainPageComponent } from './game-main-page.component';

describe('GameMainPageComponent', () => {
  let component: GameMainPageComponent;
  let fixture: ComponentFixture<GameMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
