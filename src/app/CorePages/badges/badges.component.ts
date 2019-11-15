import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  badgesList: any;

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit() {
    this.getbadgesList();
  }

  getbadgesList() {
    this._dataService.getData('badges')
      .subscribe((res) => {
        console.log(res);
        this.badgesList = res;
      });
  }

}
