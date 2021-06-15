import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingManagementComponent } from './finding-management.component';

describe('FindingManagementComponent', () => {
  let component: FindingManagementComponent;
  let fixture: ComponentFixture<FindingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindingManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
