import { Component } from "@angular/core";


@Component({
    // selector: 'app-demo1',
    // selector: '[app-demo1]',
    selector: '.app-demo1',
    templateUrl: './demo1.component.html',
    // template: `<p class='color-red'>we are in demo1 component</p>`,
    styleUrls: ['./demo1.component.css']
    // styles: [`
    //     .color-red{
    //          color: red
    //         }`
    //         ]
})

export class Demo1Component {
    showText = 'Welcome to angular class';
    toggleDisable = true;

    studentArray = [{
        'name': 'Name1',
        'pass': true
    },
    {
        'name': 'Name2',
        'pass': true
    },
    {
        'name': 'Name3',
        'pass': false
    },
    {
        'name': 'Name4',
        'pass': false
    },
    {
        'name': 'Name5',
        'pass': false
    }]

    // if(true){
    //     //this block will work
    // }

    getColor(name) {
 
        if (name === 'Name1') {
            return 'red'
        } else {
            return 'green'
        }


    }



    // getColor() {
    //     return 67
    //     // if (name === 'Name1') {
    //     //     return 'red'
    //     // } else {
    //     //     return 'green'
    //     // }


    // }


    toggleButton() {
        this.toggleDisable = !this.toggleDisable;
    }

    callAlert() {
        // this.showText = 'Text Change'
        alert(this.showText);
    }

}