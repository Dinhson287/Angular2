import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoGameComponent } from './xo-game.component';

describe('XoGameComponent', () => {
  let component: XoGameComponent;
  let fixture: ComponentFixture<XoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XoGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
