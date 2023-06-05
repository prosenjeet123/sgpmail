import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BasicService } from '../shared/basic.service';

@Component({
  selector: 'sgpmail-cards-layout',
  templateUrl: './cards-layout.component.html',
  styleUrls: ['./cards-layout.component.scss'],
})
export class CardsLayoutComponent implements OnInit {

  @Input() userData: User | undefined;
  @Input() emailData: any | null;
  @Output() clickCardEvent = new EventEmitter<any>();
  selectedCard: string = '';

  constructor(private basic: BasicService){

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['emailData'] &&  changes['emailData'].currentValue  && changes['emailData'].currentValue.length > 0){
      this.selectedCard = changes['emailData']?.currentValue[0]?.id;
    }
  }


  viewDetail(card: any){
  }

  selectCard(data: any){
    this.selectedCard = data.id;
    console.log(this.selectedCard)
    this.basic.sendData(data);
    this.clickCardEvent.emit(data);
  }
}
