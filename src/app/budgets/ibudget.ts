export class IBudget {
  budgetId: number;
  budgetName: string;
  dateCreated: string;
  lastModified: string;
  budgetAmount: number;
  amountPlanned: number;
  amountUnplanned: number;
  amountSpent: number;
  amountRemaining: number;
  notes: string;
  planningRating: number;
  spendingRating: number;
  imageUrl: string;
}
