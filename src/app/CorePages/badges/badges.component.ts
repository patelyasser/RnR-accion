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
  }

  getBadgesList() {
    this._dataService.getData('badgedetails')
      .subscribe((res) => {
        console.log(res);
        this.badgesList = res;
        this.updateAwardData();
      });
  }

  updateAwardData() {
    this.badges = [{
      'imageURL': '../../../assets/img/brand/ace.svg',
      'id': "ACE",
      'given': this.getCount('ACE'),
      'received': Math.round(Math.random() * 10)
    }, {
      'imageURL': '../../../assets/img/brand/maven.svg',
      'id': "Maven",
      'given': this.getCount('Maven'),
      'received': Math.round(Math.random() * 10)
    }, {
      'imageURL': '../../../assets/img/brand/customer_delight.svg',
      'id': "Customer Delight",
      'given': this.getCount('Customer Delight'),
      'received': Math.round(Math.random() * 10)
    }, {
      'imageURL': '../../../assets/img/brand/rising_star.svg',
      'id': "Rising Star",
      'given': this.getCount('Rising Star'),
      'received': Math.round(Math.random() * 10)
    }, {
      'imageURL': '../../../assets/img/brand/tech_panel.svg',
      'id': "Tech Panel",
      'given': this.getCount('Tech Panel'),
      'received': Math.round(Math.random() * 10)
    }, {
      'imageURL': '../../../assets/img/brand/outstanding_performer.svg',
      'id': "Outstanding Performer",
      'given': this.getCount('Outstanding Performer'),
      'received': Math.round(Math.random() * 10)
    }];
  }

  getCount(key) {
    let count = 0;
    this.badgesList.forEach(element => {
      if (element.badges === key)
        count++;
    });

    return count;
  }

  routeWithData(data) {
    this._router.navigateByUrl('/badges/add', { state: {badges: data} });
  }

}
