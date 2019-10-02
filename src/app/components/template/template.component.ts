import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  @Input() passedValue: String = "";

  ngOnInit() {
  }

}
