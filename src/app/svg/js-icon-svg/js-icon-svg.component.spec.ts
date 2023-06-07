import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIconSvgComponent } from './js-icon-svg.component';

describe('JsIconSvgComponent', () => {
  let component: JsIconSvgComponent;
  let fixture: ComponentFixture<JsIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsIconSvgComponent]
    });
    fixture = TestBed.createComponent(JsIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
