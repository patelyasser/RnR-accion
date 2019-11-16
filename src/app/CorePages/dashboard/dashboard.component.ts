import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { environment } from '../../../environments/environment';

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
    {
      backgroundColor: '#EEF9FC',
      borderColor: '#20a8d8',
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

  locale = 'en-us';

  currentMonth: string = (new Date()).toLocaleString(this.locale, { month: "long" });
  
  constructor(
    private _dataService: DataService
    ) { }
    
    ngOnInit(): void {
      this._dataService.getData('filtered-data')
      .subscribe((res) => {
        this.leaderBoardData = res.splice(0, 5);
      });
      
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
    
    generateImageURl(url) {
      if (url) {
        return `${environment.aicURL}${url}`;
      }
      
      return "assets/img/avatars/default_user.jpg";
    }
    
    generateIcons(data) {
      let str = '', i;
      
      for (const key in data) {
        switch (key) {
          case 'ACE':
            for (i = 0; i < data[key]; i++) {
              str += `<img class="badges-height" src="../../../assets/img/brand/ace.svg"
                data-toggle="tooltip" title="ACE">`
            }
            break;
          
          case 'Rising Star':
            for (i = 0; i < data[key]; i++) {
              str += `<img class="badges-height" src="../../../assets/img/brand/rising_star.svg"
                data-toggle="tooltip" title="Rising Star">`
            }
            break;

          case 'Maven':
            for (i = 0; i < data[key]; i++) {
              str += `<img class="badges-height" src="../../../assets/img/brand/maven.svg"
                data-toggle="tooltip" title="Maven">`
            }
            break;

          case 'Customer Delight':
            for (i = 0; i < data[key]; i++) {
              str += `<img class="badges-height" src="../../../assets/img/brand/customer_delight.svg"
                data-toggle="tooltip" title="Customer Delight">`
            }
            break;

          case 'Tech Panel':
            for (i = 0; i < data[key]; i++) {
              str += `<img class="badges-height" src="../../../assets/img/brand/tech_panel.svg"
                data-toggle="tooltip" title="Tech Panel">`
            }
            break;

          case 'Outstanding Performer':
            for (i = 0; i < data[key]; i++) {
              str += `<img class="badges-height" src="../../../assets/img/brand/outstanding_performer.svg"
                data-toggle="tooltip" title="Outstanding Performer">`
            }
            break;

          default:
          break;
        }
      }
      
      return str;
    }
    
  }
  