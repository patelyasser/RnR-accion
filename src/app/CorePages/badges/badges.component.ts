import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  badgesList: any = [];
  badges: any;
  badges1: any;

  constructor(
    private _dataService: DataService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.getbadgesList();

    this.badges = [{
      'imageURL': '../../../assets/img/brand/medal.svg',
      'id': "ACE",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/medal_1.svg',
      'id': "Maven",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/medal_1.svg',
      'id': "Customer Delight",
      'given': 0,
      'received': 0
    }];

    this.badges1 = [{
      'imageURL': '../../../assets/img/brand/medal_3.svg',
      'id': "Rising Star",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/trophy.svg',
      'id': "Tech Panel",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/certificate.svg',
      'id': "Outstanding Performer",
      'given': 0,
      'received': 0
    }];
  }

  getbadgesList() {
    this._dataService.getData('badgedetails')
      .subscribe((res) => {
        console.log(res);
        this.badgesList = res;
      });
  }

  routeWithData(data) {
    this._router.navigateByUrl('/badges/add', { state: {badges: data} });
  }

}
