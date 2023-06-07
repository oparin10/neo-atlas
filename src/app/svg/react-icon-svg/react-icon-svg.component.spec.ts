import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactIconSvgComponent } from './react-icon-svg.component';

describe('ReactIconSvgComponent', () => {
  let component: ReactIconSvgComponent;
  let fixture: ComponentFixture<ReactIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactIconSvgComponent]
    });
    fixture = TestBed.createComponent(ReactIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
