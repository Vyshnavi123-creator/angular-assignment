import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorBookComponent } from './horror-book.component';

describe('HorrorBookComponent', () => {
  let component: HorrorBookComponent;
  let fixture: ComponentFixture<HorrorBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorrorBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorrorBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
