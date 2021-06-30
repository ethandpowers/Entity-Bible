import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastonComponent } from './easton.component';

describe('EastonComponent', () => {
  let component: EastonComponent;
  let fixture: ComponentFixture<EastonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
