import { Component, OnInit } from '@angular/core';
import { Size as ButtonSize } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  buttonSize: ButtonSize = 'medium';

  onResize() {
    this.buttonSize = window.innerWidth < 768 ? 'small' : 'medium';
  }

  ngOnInit(): void {
    this.onResize();
  }
}
