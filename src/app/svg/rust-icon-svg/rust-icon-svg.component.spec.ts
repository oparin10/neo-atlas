import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustIconSvgComponent } from './rust-icon-svg.component';

describe('RustIconSvgComponent', () => {
  let component: RustIconSvgComponent;
  let fixture: ComponentFixture<RustIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RustIconSvgComponent]
    });
    fixture = TestBed.createComponent(RustIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
