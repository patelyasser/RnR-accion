import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  radioModel: string = 'Month';

  // lineChart
  public lineChartData: Array<any> = [
    {
      data: [4, 3, 3.5, 3.8, 3.4, 4, 4.2, 3.5, 3.9, 3.3, 3.9, 4.1],
      label: 'Rating'
    },
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June',
    'July','August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true,
    scales: { 
      yAxes: [{
        ticks: { 
          min: 2,
          max: 5
        },
      }]
    },
    legend: {
      display: true,
      position: 'bottom'
    }
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(0,0,0,0.20)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public leaderBoardData: any = [];
  public activeUsersData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.leaderBoardData = [{
      'name': 'Ashutosh',
      'image': 'default_user',
      'message': 'Won 5 badges',
      'project': 'Breeze'
    }, {
      'name': 'Jane',
      'image': 'default_user',
      'message': 'Won 4 badges',
      'project': 'FPG'
    }, {
      'name': 'Saurabh',
      'image': 'default_user',
      'message': 'Won 3 badges',
      'project': 'App Orchid'
    }, {
      'name': 'Anand',
      'image': 'default_user',
      'message': 'Won 2 badges',
      'project': 'Breeze'
    }, {
      'name': 'Amit',
      'image': 'default_user',
      'message': 'Won 2 badges',
      'project': 'Breeze'
    }];

    this.activeUsersData = [{
      'name': 'Ashutosh',
      'image': 'default_user',
      'message': 'Added 5 comments/emoticons',
      'project': 'Breeze'
    }, {
      'name': 'Jane',
      'image': 'default_user',
      'message': 'Added 4 comments/emoticons',
      'project': 'FPG'
    }, {
      'name': 'Saurabh',
      'image': 'default_user',
      'message': 'Added 3 comments/emoticons',
      'project': 'App Orchid'
    }, {
      'name': 'Anand',
      'image': 'default_user',
      'message': 'Added 2 comments/emoticons',
      'project': 'Breeze'
    }, {
      'name': 'Amit',
      'image': 'default_user',
      'message': 'Added 2 comments/emoticons',
      'project': 'Breeze'
    }];
  }

}
