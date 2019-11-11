import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BudgetListComponent } from './budgets/budget-list.component';
import { NoDotsPipe } from './shared/no-dots-pipe.pipe';

@NgModule({
  declarations: [AppComponent, BudgetListComponent, NoDotsPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
