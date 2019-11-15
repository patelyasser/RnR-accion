import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../../../shared/services/notification.service';
import { DataService } from '../../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-badges',
  templateUrl: './give-badges.component.html',
  styleUrls: ['./give-badges.component.scss']
})
export class GiveBadgesComponent implements OnInit {

  formURL = environment.formURL;
  badgesFormURL: string = `${this.formURL}/badge-details`;
  formData: any = {
    "data": {}
  };

  constructor(
    private notificationService: NotificationService,
    private _dataService: DataService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(event) {

    this._dataService.postData('badges', event.data)
      .subscribe((res) => {
        console.log(res)
        this.sendMail(event.data);
        this.onCancel();
      });
  }

  onCancel() {
    this._router.navigate([`/badges`]);
  }

  sendMail(data): any {
    const userMail = 'notify.micro.service@gmail.com';
    let mailData = {
      "agentName": "BadgeDetails",
      "users": [
        {
          "user": {
            "channelTypes": [
              "email"
            ],
            "from": `Accionlabs <${userMail}>`,
            "emailGateway": "aws_ses",
            "emailAddress": [
              data.employeeEmail
            ],
            "badge": data.badges,
            "name": data.employee,

          }
        }
      ],
      "statusUpdate": {
        "webhookUrl": `${environment.notificationURL}/api/tempWebHook`,
        "method": "GET",
        "webhookHheaders": {
          "Authorization": "jdfh"
        }
      }
    }
    this.notificationService.sendMail(mailData).subscribe((res) => {
      console.log('sent', res)
    },
      error => {
        console.log(error);
      })
  }

  badgesDataChanged(event) {
    if (event.changed && event.changed.component.key === 'employee' && event.changed.value) {
      this.formData['data']['employeeEmail'] = event.data.employee.email;
      this.formData['data']['employee'] = event.data.employee.name;
      this.formData = Object.assign({}, this.formData);
    }
  }

}
