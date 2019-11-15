import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-give-badges',
  templateUrl: './give-badges.component.html',
  styleUrls: ['./give-badges.component.scss']
})
export class GiveBadgesComponent implements OnInit {

  formURL = environment.formURL;
  badgesFormURL: string = `${this.formURL}/badge-details`;

  constructor() { }

  ngOnInit() {
  }

}
