import { Component } from '@angular/core';

@Component({
  selector: 'web-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  year = new Date().getFullYear();
  title = 'BrainWare Orders';

}
