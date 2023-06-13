import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasLogoSvgComponent } from './atlas-logo-svg.component';

describe('AtlasLogoSvgComponent', () => {
  let component: AtlasLogoSvgComponent;
  let fixture: ComponentFixture<AtlasLogoSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtlasLogoSvgComponent]
    });
    fixture = TestBed.createComponent(AtlasLogoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
