import { Component, OnInit } from '@angular/core';

export class Contact {
  constructor(
    fname: string,
    email: string,
    comment: string
  ) {}
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  model = new Contact('','','');

  constructor() { }

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model); }

}