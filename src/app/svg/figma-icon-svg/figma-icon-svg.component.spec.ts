import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaIconSvgComponent } from './figma-icon-svg.component';

describe('FigmaIconSvgComponent', () => {
  let component: FigmaIconSvgComponent;
  let fixture: ComponentFixture<FigmaIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigmaIconSvgComponent]
    });
    fixture = TestBed.createComponent(FigmaIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
