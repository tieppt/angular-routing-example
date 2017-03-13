import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  searchKey: string = '';
  page: number = 1;
  subscription: Subscription;

  query: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route
      .queryParams
      .map(params => ({
        // return object with all needed key
        searchKey: params['searchKey'] || '',
        page: params['page'] || 1
      }))
      .subscribe(param => {
        this.searchKey = param.searchKey;
        this.page = param.page;
      });
  }

  doSearch() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        searchKey: this.query,
        page: this.page
      }
    };
    this.router.navigate([], navigationExtras);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
