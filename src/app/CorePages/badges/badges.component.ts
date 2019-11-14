import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  formURL = environment.formURL;
  badgesFormURL: string = `${this.formURL}/badge-details`;

  constructor() { }

  ngOnInit() {
  }

}
