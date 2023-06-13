import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsIconSvgComponent } from './ts-icon-svg.component';

describe('TsIconSvgComponent', () => {
  let component: TsIconSvgComponent;
  let fixture: ComponentFixture<TsIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsIconSvgComponent]
    });
    fixture = TestBed.createComponent(TsIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
