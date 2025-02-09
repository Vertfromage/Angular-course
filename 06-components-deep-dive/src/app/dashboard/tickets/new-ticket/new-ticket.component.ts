import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';
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
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  ngOnInit(): void {
    console.log('ONINIT')
    console.log(this.form().nativeElement)
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT')
    console.log(this.form().nativeElement)
  }

  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText);
    this.form().nativeElement.reset();
  }
}
