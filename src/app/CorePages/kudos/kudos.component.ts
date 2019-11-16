import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.scss']
})
export class KudosComponent implements OnInit {

  kudosList: any = [];

  constructor(
    private _dataService: DataService,
    private _router: Router) { }

  ngOnInit() {
    this.getKudosList();
  }

  getKudosList() {
    this._dataService.getData('kudodetails')
      .subscribe((res) => {
        console.log(res);
        this.kudosList = res;
      });
  }

  routeWithData(data) {
    this._router.navigateByUrl('/kudos/add', { state: {kudos: data} });
  }

}
