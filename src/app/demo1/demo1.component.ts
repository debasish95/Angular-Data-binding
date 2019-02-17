import { Component } from "@angular/core";


@Component({
    // selector: 'app-demo1',
    // selector: '[app-demo1]',
    selector: '.app-demo1',
    templateUrl:'./demo1.component.html',
    // template: `<p class='color-red'>we are in demo1 component</p>`,
    styleUrls : ['./demo1.component.css']
    // styles: [`
    //     .color-red{
    //          color: red
    //         }`
    //         ]
})

export class Demo1Component {
    showText = 'Welcome to angular class';
    toggleDisable = true;

    toggleButton(){
    this.toggleDisable = ! this.toggleDisable;
    }

}