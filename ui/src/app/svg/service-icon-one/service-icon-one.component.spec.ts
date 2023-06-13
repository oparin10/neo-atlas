import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIconOneComponent } from './service-icon-one.component';

describe('ServiceIconOneComponent', () => {
  let component: ServiceIconOneComponent;
  let fixture: ComponentFixture<ServiceIconOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceIconOneComponent]
    });
    fixture = TestBed.createComponent(ServiceIconOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
