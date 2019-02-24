import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dev-edit',
  templateUrl: './dev-edit.component.html',
  styleUrls: ['./dev-edit.component.css']
})
export class DevEditComponent implements OnInit {

  @Output() addDeveloper = new EventEmitter();
  name: any;
  eid: any;
  exp: any;
  doj: any;
  
  constructor() { }

  pushDataToEmpArr(){

    this.addDeveloper.emit({
      'Name': this.name,
      'empId': this.eid,
      'exp': this.exp,
      'doj': this.doj,
      'tech': 'Angular',
      'deg': 'Software Consultant',
      'className': 'text-color'
    })


    

  }




  ngOnInit() {
  }

}
