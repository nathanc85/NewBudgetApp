import { BudgetService } from './budget.service';
import { Component, OnInit } from '@angular/core';
import { IBudget } from './ibudget';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  pageTitle = 'Budget List';
  imageWidth = 50;
  imageMargin = 4;
  showImage = false;

  filteredByTemp = '';

  public get filteredBy(): string {
    return this.filteredByTemp;
  }

  public set filteredBy(value: string) {
    this.filteredByTemp = value;
    this.filteredBudgets = this.filteredBy ? this.performFiltering(this.filteredBy) : this.budgets;
  }

  filteredBudgets: IBudget[] = [];

  budgets: IBudget[] = [];

  constructor(private budgetsService: BudgetService) {

  }

  ngOnInit() {
    console.log('Inside ngOnInit()');
    this.budgets = this.budgetsService.getBudgets();

    this.filteredBy = '';
    this.filteredBudgets = this.budgets;
  }

  toggleImage() {
    console.log('Inside toggleImage()');
    this.showImage = !this.showImage;
    console.log('ShowImage: ' + this.showImage);
  }

  performFiltering(filteredBy: string): IBudget[] {
    filteredBy = filteredBy.toLowerCase();
    return this.filteredBudgets.filter( budget => budget.budgetName.toLowerCase().indexOf(filteredBy) !== -1);
  }
}
