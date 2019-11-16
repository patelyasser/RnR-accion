import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.scss']
})
export class KudosComponent implements OnInit {

  kudosList: any = [];

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
  }

  getbadgesList() {
    this._dataService.getData('kudodetails')
      .subscribe((res) => {
        console.log(res);
        this.kudosList = res;
      });
  }

}
