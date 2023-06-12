import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleIconSvgComponent } from './puzzle-icon-svg.component';

describe('PuzzleIconSvgComponent', () => {
  let component: PuzzleIconSvgComponent;
  let fixture: ComponentFixture<PuzzleIconSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuzzleIconSvgComponent]
    });
    fixture = TestBed.createComponent(PuzzleIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
