import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styles: []
})
export class PageErrorComponent implements OnInit {
  pageTitle = 'Error 404';

  constructor() { }

  ngOnInit() {
  }

}
