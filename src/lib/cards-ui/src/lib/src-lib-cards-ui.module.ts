import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsUiComponent } from './cards-ui/cards-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardsUiComponent],
  exports:[
    CardsUiComponent
  ]
})
export class SrcLibCardsUiModule {}
