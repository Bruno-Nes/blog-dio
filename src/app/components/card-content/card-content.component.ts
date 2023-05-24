import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent {
    @Input()
    cardTitle: string = ""; 
    @Input()
    cardSubTitle: string = ""; 
    @Input()
    cardDescription?: string = "";
    @Input()
    srcLink: string = ""; 
    cssBase = {
      width : '500px',
      height : '320px',
      padding : '1rem 1.5rem',
      minHeight : '',
    }


    isSamllCard(subtitle:string) {
      if(subtitle == null) {
        this.cssBase.width = '240px';
        this.cssBase.height = 'auto';
        this.cssBase.minHeight = '200px';
        this.cssBase.padding = '0.8rem';
        return true;  
      }
      return false;
    }

  showCard():boolean {
    return this.cardTitle && this.srcLink ? true : false;
  }
}
