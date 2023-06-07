import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpSvgComponent } from './gcp-svg.component';

describe('GcpSvgComponent', () => {
  let component: GcpSvgComponent;
  let fixture: ComponentFixture<GcpSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GcpSvgComponent]
    });
    fixture = TestBed.createComponent(GcpSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
