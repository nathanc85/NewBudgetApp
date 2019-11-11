import { IBudget } from './ibudget';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  getBudgets(): IBudget[] {
    return [
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
    ]
    ;
  }
}
