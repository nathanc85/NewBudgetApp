import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BudgetsListComponent } from './budgets/budgets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
