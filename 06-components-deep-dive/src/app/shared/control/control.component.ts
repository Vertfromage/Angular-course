import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();
  private el = inject(ElementRef);
  // get ahold of projected
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement|HTMLTextAreaElement>
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    // all changes whole application - alot
    afterRender(() => {
      console.log('afterRender');
    });

    // next change only not as frequent
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }
  ngAfterContentInit(): void {}

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
