import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-give-kudos',
  templateUrl: './give-kudos.component.html',
  styleUrls: ['./give-kudos.component.scss']
})
export class GiveKudosComponent implements OnInit {

  formURL: string = environment.formURL;
  kudosFormURL: string = `${this.formURL}/kudos-details`;

  constructor() { }

  ngOnInit() {
  }

}
