import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TextFieldDirective } from './text-field.directive';
import { styles_tw } from './styles';

@Component({
  template: `
    <div textField>
      <input #inputElement type="text" />
    </div>
  `,
})
class TestComponent {
  @ViewChild('inputElement', { static: true })
  inputElement!: ElementRef<HTMLInputElement>;
}

describe('TextFieldDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextFieldDirective, TestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should apply the directive class to the input element', () => {
    const inputElement = component.inputElement.nativeElement;
    expect(inputElement.classList).toContain(styles_tw.input.base);
  });

  it('should set the id of the input element based on the wrapper component', () => {
    const wrapperComponent =
      fixture.debugElement.nativeElement.querySelector('div');
    wrapperComponent.id = 'test-input-id';
    fixture.detectChanges();

    const inputElement = component.inputElement.nativeElement;
    expect(inputElement.id).toBe('test-input-id');
  });

  // Add more test cases as needed
});
