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
  // @ViewChild('eid') empId; 
  // this.empId.nativeElement.value
  activatedMenu = 'dev'

  






  toggleMenu(menuName) {
    this.activatedMenu = menuName
  }


}
