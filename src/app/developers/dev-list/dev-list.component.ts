import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.css']
})
export class DevListComponent implements OnInit {

  constructor() { }

  @Input() devList;

  ngOnInit() {
    console.log(this.devList)
  }

}
