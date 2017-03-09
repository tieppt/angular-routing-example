import { Component, OnInit } from '@angular/core';
import { NotFoundService } from '../services/not-found.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private nfService: NotFoundService) { }

  ngOnInit() {
    this.nfService.emit(true);
  }

  ngOnDestroy() {
    this.nfService.emit(false);
  }
}
