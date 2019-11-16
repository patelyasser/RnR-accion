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
    this.getBadgesList();

    this.badges = [{
      'imageURL': '../../../assets/img/brand/ace.svg',
      'id': "ACE",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/maven.svg',
      'id': "Maven",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/customer_delight.svg',
      'id': "Customer Delight",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/rising_star.svg',
      'id': "Rising Star",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/tech_panel.svg',
      'id': "Tech Panel",
      'given': 0,
      'received': 0
    }, {
      'imageURL': '../../../assets/img/brand/outstanding_performer.svg',
      'id': "Outstanding Performer",
      'given': 0,
      'received': 0
    }];
  }

  getBadgesList() {
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
