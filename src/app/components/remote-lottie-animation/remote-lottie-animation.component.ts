import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-remote-lottie-animation',
  templateUrl: './remote-lottie-animation.component.html',
  styles: [],
})
export class RemoteLottieAnimationComponent {
  animationOptions: AnimationOptions = {
    path: '/assets/lottie.json',
    autoplay: true,
    loop: true,
  };
}
