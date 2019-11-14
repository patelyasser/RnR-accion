import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})

export class WidgetComponent implements OnInit {
    @Input() title: string;
    @Input() count: number;
    @Input() class: string;
    @Input() image: string;
    @Input() height: string;
    imagePath: string

    constructor() { }

    ngOnInit() {
        if (this.image) {
            this.imagePath = `../../../assets/img/icons/${this.image}.svg`
        }
    }
}