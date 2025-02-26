import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent  implements AfterViewInit, OnInit{
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>; // not in ngOnInit
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output add = new EventEmitter<{title:string; text:string}>}();
  enteredTitle = ""
  enteredText = ""
  add = output<{title:string; text:string}>()

  ngOnInit(): void {
    console.log('ONINIT')
    console.log(this.form().nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT')
    console.log(this.form().nativeElement)
  }

  onSubmit() {
    this.add.emit({title:this.enteredTitle, text:this.enteredText});

    // this.form().nativeElement.reset();
    this.enteredText =""
    this.enteredTitle=""
  }
}
