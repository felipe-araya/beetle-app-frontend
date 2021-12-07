import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingDetailComponent } from './finding-detail.component';

describe('FindingDetailComponent', () => {
  let component: FindingDetailComponent;
  let fixture: ComponentFixture<FindingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
