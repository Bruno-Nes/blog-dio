import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card-content',
  templateUrl: './small-card-content.component.html',
  styleUrls: ['./small-card-content.component.css']
})
export class SmallCardContentComponent {
    @Input()
    cardTitle!: string; 
    @Input()
    cardDescription?: string;
    @Input()
    srcLink!: string;

    showCard():boolean {
      return this.cardTitle && this.srcLink ? true : false;
    }
}
