import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent, Variant, Size } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should emit click event', () => {
    spyOn(component.click, 'emit');
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    expect(component.click.emit).toHaveBeenCalled();
  });

  it('should have default variant of "contained"', () => {
    fixture.detectChanges();
    expect(component.variant).toBe('contained');
  });

  it('should have default size of "medium"', () => {
    fixture.detectChanges();
    expect(component.size).toBe('medium');
  });

  it('should disable the button when disabled input is set', () => {
    component.disabled = true;
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBe(true);
  });

  it('should set the correct variant class on the button', () => {
    component.variant = 'outlined';
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList).toContain('hover:border-primary-500');
    expect(buttonElement.classList).toContain('hover:text-primary-500');
  });

  it('should set the correct size class on the button', () => {
    component.size = 'small';
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList).toContain('text-[0.625rem]');
    expect(buttonElement.classList).toContain('py-1');
    expect(buttonElement.classList).toContain('px-8');
  });

  // Add more test cases as needed
});
