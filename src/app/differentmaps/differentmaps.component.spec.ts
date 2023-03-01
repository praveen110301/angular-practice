import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentmapsComponent } from './differentmaps.component';

describe('DifferentmapsComponent', () => {
  let component: DifferentmapsComponent;
  let fixture: ComponentFixture<DifferentmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentmapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
