import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpicesComponent } from './all-spices.component';

describe('AllSpicesComponent', () => {
  let component: AllSpicesComponent;
  let fixture: ComponentFixture<AllSpicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSpicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSpicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
