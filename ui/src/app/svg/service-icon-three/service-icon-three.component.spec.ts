import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIconThreeComponent } from './service-icon-three.component';

describe('ServiceIconThreeComponent', () => {
  let component: ServiceIconThreeComponent;
  let fixture: ComponentFixture<ServiceIconThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceIconThreeComponent]
    });
    fixture = TestBed.createComponent(ServiceIconThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
