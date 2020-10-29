import { HierarchicalAnimation } from './route-animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pohl';

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
}

goToPortfolio(){
 
}

}
