import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sgpmail-cards-ui',
  templateUrl: './cards-ui.component.html',
  styleUrls: ['./cards-ui.component.scss'],
})
export class CardsUiComponent {

  @Input() card: any;

  @Output() viewEvent = new EventEmitter<any>();
  
  viewEmail(data: any){
    this.viewEvent.emit(data);
  }

}
