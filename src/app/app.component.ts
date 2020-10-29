import { HierarchicalAnimation } from './route-animation';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pohl';
  showUp = false;

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

 
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showUp = true;
    } else {
      this.showUp = false;
    }
  }

  goUp(){
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
