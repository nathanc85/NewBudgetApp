import { IBudget } from './ibudget';
import { BudgetService } from './budget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styles: []
})
export class BudgetDetailComponent implements OnInit {
  pageTitle = 'Budget Detail';

  currentBudget: IBudget;

  constructor(private budgetService: BudgetService) { }

  ngOnInit() {

  }

}
