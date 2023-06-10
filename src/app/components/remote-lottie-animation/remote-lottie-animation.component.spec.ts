import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteLottieAnimationComponent } from './remote-lottie-animation.component';

describe('RemoteLottieAnimationComponent', () => {
  let component: RemoteLottieAnimationComponent;
  let fixture: ComponentFixture<RemoteLottieAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteLottieAnimationComponent]
    });
    fixture = TestBed.createComponent(RemoteLottieAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
