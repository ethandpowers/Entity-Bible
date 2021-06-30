import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastonResultComponent } from './easton-result.component';

describe('EastonResultComponent', () => {
  let component: EastonResultComponent;
  let fixture: ComponentFixture<EastonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastonResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
