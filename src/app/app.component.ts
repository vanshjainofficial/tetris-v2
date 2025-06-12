import { Component } from '@angular/core';
import { AngularTetrisComponent } from './containers/angular-tetris/angular-tetris.component';

@Component({
  standalone: true,
  selector: 'app-root', 
  imports: [AngularTetrisComponent],
  template: '<angular-tetris></angular-tetris>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
