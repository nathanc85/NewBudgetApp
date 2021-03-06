import { BudgetDetailGuard } from './budgets/budget-detail.guard';
import { PageErrorComponent } from './page-error.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Route, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { BudgetListComponent } from './budgets/budget-list.component';
import { NoDotsPipe } from './shared/no-dots-pipe.pipe';
import { BudgetDetailComponent } from './budgets/budget-detail.component';
import { WelcomeComponent } from './general/welcome.component';
import { CustomerComponent } from './customers/customer.component';

const ROUTES: Route[] = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: CustomerComponent},
  {path: 'budgets', component: BudgetListComponent},
  {path: 'budgets/:id', canActivate: [BudgetDetailGuard] , component: BudgetDetailComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: PageErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    NoDotsPipe,
    BudgetDetailComponent,
    WelcomeComponent,
    PageErrorComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  pagetitle: string = "Demo";

}
