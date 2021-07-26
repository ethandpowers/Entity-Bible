import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleSelectComponent } from './bible-select.component';

describe('BibleSelectComponent', () => {
  let component: BibleSelectComponent;
  let fixture: ComponentFixture<BibleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
