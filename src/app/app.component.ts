import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShown = false;
  title = 'sharayu';
  elem: any;
  hideNav() {
    this.elem = document.getElementById('navbarSupportedContent');
    this.elem.style.display = 'hidden';
  }
}
