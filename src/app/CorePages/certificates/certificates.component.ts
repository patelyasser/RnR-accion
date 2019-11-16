import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificateComponent implements OnInit {

  certificateData: Array<Object>;

  private myTemplate: any = "";
    constructor( ) {
    }


  ngOnInit() {
    this.certificateData = [
      {
        "awardName": "ACE",
        "year": "2019",
        "url": "../../../assets/img/brand/ace_award.png",
        "icon": "../../../assets/img/brand/ace.svg"
      },
      {
        "awardName": "Rising Star",
        "year": "2019",
        "url": "../../../assets/img/brand/shining_star.png",
        "icon": "../../../assets/img/brand/rising_star.svg"
      },{
        "awardName": "Customer Delight",
        "year": "2019",
        "url": "../../../assets/img/brand/customer_delight.png",
        "icon": "../../../assets/img/brand/customer_delight.svg"
      },
      {
        "awardName": "Maven",
        "year": "2019",
        "url": "../../../assets/img/brand/maven.png",
        "icon": "../../../assets/img/brand/maven.svg"
      },
      {
        "awardName": "Tech Panel",
        "year": "2019",
        "url": "../../../assets/img/brand/tech_panel.png",
        "icon": "../../../assets/img/brand/tech_panel.svg"
      },
      {
        "awardName": "Outstanding Performer",
        "year": "2019",
        "url": "../../../assets/img/brand/outstanding_performer.png",
        "icon": "../../../assets/img/brand/outstanding_performer.svg",
      }
    ]
  }

  loadHTML(url): void {
    document.getElementById("certificate").innerHTML=`<object type="text/html" data=${url} ></object>`;
  }

}
