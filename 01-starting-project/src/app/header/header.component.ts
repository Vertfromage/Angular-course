import { Component } from "@angular/core";
@Component({
    selector: 'app-header', //two words to avoid clashing with builtin 
    standalone:false, // 19 or higher true by default (modular/false vs standalone/true)
    templateUrl: './header.component.html',// Can do inline, but better to use external file example inline: template: '<p>Hello!</p>' 
    styleUrl: './header.component.css' 
})
export class HeaderComponent {}