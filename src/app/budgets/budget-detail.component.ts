import { IBudget } from './ibudget';
import { BudgetService } from './budget.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styles: []
})
export class BudgetDetailComponent implements OnInit {
  pageTitle = 'Budget Detail';
  budgetId: string;

  currentBudget: IBudget;

  constructor(private budgetService: BudgetService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.budgetId = this.route.snapshot.paramMap.get('id');
  }

  onBack() {
    this.router.navigate(['/budgets']);
  }
}
