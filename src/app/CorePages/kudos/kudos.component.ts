import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.scss']
})
export class KudosComponent implements OnInit {

  formURL: string = environment.formURL;
  kudosFormURL: string = `${this.formURL}/kudos-details`;

  constructor() { }

  ngOnInit() {
  }

}
