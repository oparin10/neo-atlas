import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  private resizeSubject = new Subject<void>();

  resize$ = this.resizeSubject.asObservable();

  constructor() {
    this.setupResizeListener();
  }

  private setupResizeListener(): void {
    window.addEventListener('resize', () => {
      this.resizeSubject.next();
    });
  }
}
