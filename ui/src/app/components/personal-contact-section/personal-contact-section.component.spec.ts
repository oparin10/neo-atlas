import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalContactSectionComponent } from './personal-contact-section.component';

describe('PersonalContactSectionComponent', () => {
  let component: PersonalContactSectionComponent;
  let fixture: ComponentFixture<PersonalContactSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalContactSectionComponent]
    });
    fixture = TestBed.createComponent(PersonalContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
