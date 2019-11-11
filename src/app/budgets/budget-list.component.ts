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

  filteredByTemp: string;

  public get filteredBy(): string {
    return this.filteredByTemp;
  }

  public set filteredBy(value: string) {
    this.filteredByTemp = value;
    this.filteredBudgets = this.filteredBy ? this.performFiltering(this.filteredBy) : this.budgets;
  }

  filteredBudgets: IBudget[];

  budgets: IBudget[] = [
    {
      budgetId: 1,
      budgetName: 'Our November',
      dateCreated: 'November 19, 2019',
      lastModified: 'November 19, 2019',
      budgetAmount: 500,
      amountPlanned: 400,
      amountUnplanned: 100,
      amountSpent: 250,
      amountRemaining: 250,
      notes: 'Saving money for a car.',
      planningRating: 4,
      spendingRating: 2.5,
      imageUrl: 'assets/images/bird1.png'
    },
    {
      budgetId: 2,
      budgetName: 'Best October',
      dateCreated: 'October 19, 2019',
      lastModified: 'October 19, 2019',
      budgetAmount: 500,
      amountPlanned: 300,
      amountUnplanned: 200,
      amountSpent: 200,
      amountRemaining: 300,
      notes: null,
      planningRating: 3,
      spendingRating: 2,
      imageUrl: 'assets/images/bird2.png'
    },
    {
      budgetId: 3,
      budgetName: 'September',
      dateCreated: 'September 19, 2019',
      lastModified: 'September 19, 2019',
      budgetAmount: 500,
      amountPlanned: 500,
      amountUnplanned: 0,
      amountSpent: 500,
      amountRemaining: 0,
      notes: 'Going on vacation this month.',
      planningRating: 5,
      spendingRating: 5,
      imageUrl: 'assets/images/bird3.png'
    },
    {
      budgetId: 4,
      budgetName: 'Gazzelle August',
      dateCreated: 'August 19, 2019',
      lastModified: 'August 19, 2019',
      budgetAmount: 500,
      amountPlanned: 300,
      amountUnplanned: 200,
      amountSpent: 300,
      amountRemaining: 200,
      notes: 'Gazzelle intensive',
      planningRating: 3,
      spendingRating: 3,
      imageUrl: 'assets/images/bird4.png'
    }
  ];

  constructor() {
    this.filteredBy = '';
    this.filteredBudgets = this.budgets;
  }

  ngOnInit() {
    console.log('Inside ngOnInit()');
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
