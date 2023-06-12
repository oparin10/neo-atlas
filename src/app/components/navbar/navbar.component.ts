import { Component, OnInit } from '@angular/core';
import { Size as ButtonSize } from '../button/button.component';
import { ViewportService } from '../../services/viewport.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  buttonSize: ButtonSize = 'medium';

  constructor(private readonly viewportService: ViewportService) {}

  ngOnInit(): void {
    this.viewportService.resize$.subscribe(() => {
      this.updateButtonSize();
    });
  }

  private updateButtonSize(): void {
    this.buttonSize = window.innerWidth < 768 ? 'small' : 'medium';
  }
}
