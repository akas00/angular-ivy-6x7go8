import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  // boxColor = 'green';
  @Input() boxColor;
  @Input() placeholderText;

  count: number = 0;
  onCreate(inpVal) {
    if (inpVal.value.length > 0) {
      this.count = this.count + 1;
      alert(inpVal.value);
    }
  }
}
