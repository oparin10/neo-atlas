import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoSvgComponent } from './promo-svg.component';

describe('PromoSvgComponent', () => {
  let component: PromoSvgComponent;
  let fixture: ComponentFixture<PromoSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoSvgComponent]
    });
    fixture = TestBed.createComponent(PromoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
