import { Component } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styles: [],
})
export class TextFieldComponent {
  styles = styles_tw;
}

const styles_tw = {
  legend:
    'float-[unset] w-auto origin-top-left text-[8px] overflow-hidden block invisible h-[11px] duration-300 transition-[max-width_transform]',
  fieldset:
    'pl-3 text-left m-0 peer-focus:[&>legend]:max-w-lg [&>legend]:max-w-[0.01px] peer-focus:border-2 peer-focus:border-primary-400 overflow-hidden top-[-5px] border border-solid border-gray-300 pointer-events-none absolute inset-0 rounded-[inherit]',
  label:
    'pl-3 peer-focus:translate-x-[5px] peer-focus:text-[8px] duration-200 peer-focus:duration-300 cursor-text pointer-events-none text-gray-500 transition-all peer-focus:font-bold peer-focus:text-primary-400 h-fit select-none max-w-fit block overflow-hidden whitespace-nowrap overflow-ellipsis origin-top-left translate-y-[-50%] top-[50%] peer-focus:translate-y-[0%] peer-focus:top-[-25%] text-xs absolute inset-0',

  input: 'peer focus:ring-0 border-none w-full rounded-[inherit]',
  span: 'px-[5px] whitespace-nowrap',
};
