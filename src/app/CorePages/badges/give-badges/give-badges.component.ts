import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-give-badges',
  templateUrl: './give-badges.component.html',
  styleUrls: ['./give-badges.component.scss']
})
export class GiveBadgesComponent implements OnInit {

  formURL = environment.formURL;
  badgesFormURL: string = `${this.formURL}/badge-details`;

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  onSubmit(event) {
    this.sendMail(event.data);
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
            "from": `${userMail}`,
            "emailGateway": "aws_ses",
            "emailAddress": [
              'yasser.patel@accionlabs.com',
              'dhruv.vaghela@accionlabs.com',
              'pooja.salot@accionlabs.com',
              'sunil.lulla@accionlabs.com',
              'chinmay.dalvi@accionlabs.com'
            ],
            "badge": data.badge,
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

}
