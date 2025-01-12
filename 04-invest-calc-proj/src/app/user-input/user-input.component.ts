import { Component, EventEmitter, inject, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { InvestmentCalculatorService } from '../investment/investment.service';
import { type InvestmentResult } from '../investment/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment=0
  enteredAnnualInvestment=0
  enteredExpectedReturn=0
  enteredDuration=0

  @Output() complete = new EventEmitter<InvestmentResult[]>();

  private investmentService = inject(InvestmentCalculatorService)
  onFormSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this. enteredExpectedReturn,
      duration: this.enteredDuration
    })
  }
}
