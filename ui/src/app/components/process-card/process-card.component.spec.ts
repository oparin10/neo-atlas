import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCardComponent } from './process-card.component';

describe('ProcessCardComponent', () => {
  let component: ProcessCardComponent;
  let fixture: ComponentFixture<ProcessCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessCardComponent]
    });
    fixture = TestBed.createComponent(ProcessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
