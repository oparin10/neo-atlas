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

  input: 'peer focus:ring-0 border-none w-full rounded-[inherit] text-sm py-3',
  label: {
    base: 'top-[50%] translate-y-[-50%] left-0 pl-3 duration-200  text-gray-500 transition-all  h-fit origin-top-left text-xs absolute',
    hasValue:
      'peer-[&:not(:placeholder-shown)]:translate-y-[-30px] peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:duration-300 peer-[&:not(:placeholder-shown)]:translate-x-[3px]',
    focus:
      'peer-focus:translate-x-[3px] peer-focus:translate-y-[-30px] peer-focus:text-[10px] peer-focus:duration-300 peer-focus:text-primary-400',
    reset:
      'overflow-ellipsis block overflow-hidden whitespace-nowrap max-w-fit select-none pointer-events-none cursor-text',
  },
  fieldset: {
    hasValue: 'peer-[&:not(:placeholder-shown)]:[&>legend]:max-w-lg',
    base: 'pl-2 [&>legend]:max-w-[0.01px] overflow-hidden top-[-5px] border border-solid border-gray-300 rounded-[inherit]',
    reset: 'text-left m-0 absolute inset-0 overflow-hidden pointer-events-none',
    focus:
      'peer-focus:[&>legend]:max-w-lg peer-focus:border-2 peer-focus:border-primary-400',
  },
  span: 'text-[10px] px-[5px] whitespace-nowrap',
};
