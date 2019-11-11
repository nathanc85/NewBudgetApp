import { PageErrorComponent } from './page-error.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { BudgetListComponent } from './budgets/budget-list.component';
import { NoDotsPipe } from './shared/no-dots-pipe.pipe';
import { BudgetDetailComponent } from './budgets/budget-detail.component';
import { WelcomeComponent } from './general/welcome.component';

const ROUTES = [
  {path: 'budgets', component: BudgetListComponent},
  {path: 'budgets/:id', component: BudgetDetailComponent},
  {path: 'welcome', redirectTo: 'budgets', pathMatch: 'full'},
  {path: '', redirectTo: 'budgets', pathMatch: 'full'},
  {path: '**', component: PageErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    NoDotsPipe,
    BudgetDetailComponent,
    WelcomeComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
