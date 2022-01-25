import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapprovalComponent } from './disapproval.component';

describe('DisapprovalComponent', () => {
  let component: DisapprovalComponent;
  let fixture: ComponentFixture<DisapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
