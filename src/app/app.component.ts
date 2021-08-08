import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  load: string = 'recipe';

  navigate(feature: string) {
    this.load = feature;
  }
}
