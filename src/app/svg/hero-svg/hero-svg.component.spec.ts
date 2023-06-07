import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSvgComponent } from './hero-svg.component';

describe('HeroSvgComponent', () => {
  let component: HeroSvgComponent;
  let fixture: ComponentFixture<HeroSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSvgComponent]
    });
    fixture = TestBed.createComponent(HeroSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
