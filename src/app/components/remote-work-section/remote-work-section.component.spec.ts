import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteWorkSectionComponent } from './remote-work-section.component';

describe('RemoteWorkSectionComponent', () => {
  let component: RemoteWorkSectionComponent;
  let fixture: ComponentFixture<RemoteWorkSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteWorkSectionComponent]
    });
    fixture = TestBed.createComponent(RemoteWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
