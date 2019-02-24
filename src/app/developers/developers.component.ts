import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  constructor() { }
  listOfDev = [{
    'Name': 'Dummy Name 1',
    'empId': '123',
    'exp': '10',
    'doj': '10-01-2019',
    'tech': 'Angular',
    'deg': 'Software Consultant',
    'className': 'text-color'
  }, {
    'Name': 'Dummy Name 2',
    'empId': '123',
    'exp': '10',
    'doj': '10-01-2019',
    'tech': 'Angular',
    'deg': 'Software Consultant',
    'className': 'text-color'
  }, {
    'Name': 'Dummy Name 3',
    'empId': '123',
    'exp': '10',
    'doj': '10-01-2019',
    'tech': 'Angular',
    'deg': 'Software Consultant',
    'className': 'text-color'
  }]


  
  addDataToEmpArr(empObj) {
    // const empObj = {
    //   'Name': this.name,
    //   'empId': this.eid,
    //   'exp': this.exp,
    //   'doj': this.doj,
    //   'tech': 'Angular',
    //   'deg': 'Software Consultant',
    //   'className': 'text-color'
    // }
    this.listOfDev.push(empObj);
    console.log(this.listOfDev);

  }


  ngOnInit() {
  }

}
