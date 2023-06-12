import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketIconSvgComponent } from './rocket-icon-svg.component';

describe('RocketIconSvgComponent', () => {
  let component: RocketIconSvgComponent;
  let fixture: ComponentFixture<RocketIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RocketIconSvgComponent]
    });
    fixture = TestBed.createComponent(RocketIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
