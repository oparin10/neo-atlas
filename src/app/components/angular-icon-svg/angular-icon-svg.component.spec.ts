import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIconSvgComponent } from './angular-icon-svg.component';

describe('AngularIconSvgComponent', () => {
  let component: AngularIconSvgComponent;
  let fixture: ComponentFixture<AngularIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularIconSvgComponent]
    });
    fixture = TestBed.createComponent(AngularIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
