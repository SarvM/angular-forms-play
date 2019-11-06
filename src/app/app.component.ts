import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // Reactive Forms
  firstName = new FormControl('default value');
  //Template-driven Forms
  lastName = 'Default Value';
  constructor() {
    this.firstName.setValue('John');
  }
}
