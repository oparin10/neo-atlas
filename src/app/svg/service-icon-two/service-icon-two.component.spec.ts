import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIconTwoComponent } from './service-icon-two.component';

describe('ServiceIconTwoComponent', () => {
  let component: ServiceIconTwoComponent;
  let fixture: ComponentFixture<ServiceIconTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceIconTwoComponent]
    });
    fixture = TestBed.createComponent(ServiceIconTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
