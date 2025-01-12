import { Component, inject } from '@angular/core';
import { InvestmentCalculatorService } from '../investment/investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    private investmentService = inject(InvestmentCalculatorService)

    get investmentResults(){
      return this.investmentService.getInvestmentResults()
    }
}
