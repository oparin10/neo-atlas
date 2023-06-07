import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsSvgComponent } from './aws-svg.component';

describe('AwsSvgComponent', () => {
  let component: AwsSvgComponent;
  let fixture: ComponentFixture<AwsSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwsSvgComponent]
    });
    fixture = TestBed.createComponent(AwsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
