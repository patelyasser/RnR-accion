import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  styleUrls: ['./progress.component.scss'],
  templateUrl: 'progress.component.html'
})
export class ProgressComponent implements OnInit {


  @Input() candidateStatus: any;
  value: number;
  type: string;

  constructor() {
  }
  
  ngOnInit(): void {
    this.calculateProgressBarValue();
  }
  
  calculateProgressBarValue(): void {
    if (this.candidateStatus.includes('Reject') || this.candidateStatus.includes('No Show') || this.candidateStatus.includes('Denied')) {
      this.type = "danger";
    } else if (this.candidateStatus.includes('Pending')) {
      this.type = "warning";
    } else if (this.candidateStatus.includes('Shortlisted') || this.candidateStatus.includes('On Hold')) {
      this.type = 'primary';
    } else {
      this.type = 'success';
    }
    let status = this.candidateStatus;
    let value = 100 / 12;
    let stage = {
      "Shortlisted": value,
      "Technical: Pending": value * 2,
      "Technical: Cleared": value * 3,
      "Technical: Reject": value * 12,
      "Manager: Pending": value * 4,
      "Manager: Cleared": value * 5,
      "Manager: Rejected": value * 12,
      "HR: Pending": value * 6,
      "HR: Cleared": value * 7,
      "HR: Rejected": value * 12,
      "DM: Pending": value * 8,
      "DM: Cleared": value * 9,
      "DM: Rejected": value * 12,
      "Offer: Sent": value * 10,
      "Offer: Denied": value * 12,
      "Offer: Accepted": value * 11,
      "Offer: Rejected": value * 12,
      "Joined": value * 12,
      "No Show": value * 12,
    }
    this.value = Math.trunc(stage[status])
  }

}
