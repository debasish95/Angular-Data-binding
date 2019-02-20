import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular class';
  name = '';
  eid = '';
  exp = '';
  doj = '';

  activatedMenu = 'dev'

  listOfDev = [{
    'Name': 'Dummy Name 1',
    'empId': '123',
    'exp': '10',
    'doj': '10-01-2019',
    'tech': 'Angular',
    'deg': 'Software Consultant'
  }, {
    'Name': 'Dummy Name 2',
    'empId': '123',
    'exp': '10',
    'doj': '10-01-2019',
    'tech': 'Angular',
    'deg': 'Software Consultant'
  }, {
    'Name': 'Dummy Name 3',
    'empId': '123',
    'exp': '10',
    'doj': '10-01-2019',
    'tech': 'Angular',
    'deg': 'Software Consultant'
  }]


  pushDataToEmpArr() {
    const empObj = {
      'Name': this.name,
      'empId': this.eid,
      'exp': this.exp,
      'doj': this.doj,
      'tech': 'Angular',
      'deg': 'Software Consultant'
    }
    this.listOfDev.push(empObj);
    console.log(this.listOfDev);
    this.name = '';
    this.eid = '';
    this.exp = '';
    this.doj = '';
  }



  toggleMenu(menuName) {
    this.activatedMenu = menuName
  }


}
