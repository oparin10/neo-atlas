import { Component, Type } from '@angular/core';
import { AngularIconSvgComponent } from 'src/app/svg/angular-icon-svg/angular-icon-svg.component';
import { FigmaIconSvgComponent } from 'src/app/svg/figma-icon-svg/figma-icon-svg.component';
import { JsIconSvgComponent } from 'src/app/svg/js-icon-svg/js-icon-svg.component';
import { ReactIconSvgComponent } from 'src/app/svg/react-icon-svg/react-icon-svg.component';
import { RustIconSvgComponent } from 'src/app/svg/rust-icon-svg/rust-icon-svg.component';
import { TsIconSvgComponent } from 'src/app/svg/ts-icon-svg/ts-icon-svg.component';

type SkillsComponents = {
  id: number;
  component: Type<any>;
};

@Component({
  selector: 'app-promo-section',
  templateUrl: './promo-section.component.html',
  styles: [],
})
export class PromoSectionComponent {
  skills: SkillsComponents[] = [
    { component: AngularIconSvgComponent, id: 0 },
    { component: ReactIconSvgComponent, id: 1 },
    { component: TsIconSvgComponent, id: 2 },
    { component: JsIconSvgComponent, id: 3 },
    { component: RustIconSvgComponent, id: 4 },
    { component: FigmaIconSvgComponent, id: 5 },
  ];
}
