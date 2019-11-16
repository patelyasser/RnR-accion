import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-give-kudos',
  templateUrl: './give-kudos.component.html',
  styleUrls: ['./give-kudos.component.scss']
})
export class GiveKudosComponent implements OnInit {

  formURL: string = environment.formURL;
  kudosFormURL: string = `${this.formURL}/kudos-details`;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.setIcons();
  }
  
  setIcons(): void {
    this.http.get(this.kudosFormURL).subscribe((data: any) => {

      let className = 'form-check-label label-position-right'
      let form = Array.from(document.getElementsByClassName(className));

      let imageLabels = [['ok', 'Good'],['thumbs-up', 'Very Good'],['clap', 'Excellent']]

      imageLabels.forEach((label, index: number) => {
        let img = document.createElement('img');
        
        img.setAttribute('data-toggle', 'tooltip')
        img.setAttribute('title', label[1])
        img.setAttribute('src', `assets/img/brand/${label[0]}.svg`)
        
        img.classList.add('form-icons');

        form[index].appendChild(img);
      });
    });
  }

}
