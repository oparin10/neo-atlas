import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIconFourComponent } from './service-icon-four.component';

describe('ServiceIconFourComponent', () => {
  let component: ServiceIconFourComponent;
  let fixture: ComponentFixture<ServiceIconFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceIconFourComponent]
    });
    fixture = TestBed.createComponent(ServiceIconFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
