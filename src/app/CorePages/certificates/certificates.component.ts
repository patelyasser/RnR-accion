import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificateComponent implements OnInit {

  certificateData: Array<Object>;
  private myTemplate: any = "";
    constructor( ) {
        // http.get(myExternalPageLink).map((html:any) => this.myTemplate = html);
    }


  ngOnInit() {
    this.certificateData = [
      {
        "awardName": "ACE",
        "year": "2019",
        "url": "../../../assets/img/brand/ace_award.png",
        "contextParams": {}
      },
      {
        "awardName": "Rising Star",
        "year": "2019",
        "url": "../../../assets/img/brand/shining_star.png"
      },
      {
        "awardName": "Outstanding Performer",
        "year": "2019",
        "url": "../../../assets/img/brand/outstanding_performer.png"
      },{
        "awardName": "Customer Delight",
        "year": "2019",
        "url": "../../../assets/img/brand/ace_award.png",
        "contextParams": {}
      },
      {
        "awardName": "Maven",
        "year": "2019",
        "url": "../../../assets/img/brand/maven.png"
      },
      {
        "awardName": "Tech Panel",
        "year": "2019",
        "url": "../../../assets/img/brand/tech_panel.png"
      }
    ]
  }

  loadHTML(url) {
    document.getElementById("certificate").innerHTML=`<object type="text/html" data=${url} ></object>`;
}

}
