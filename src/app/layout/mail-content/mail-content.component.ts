import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BasicService } from '../shared/basic.service';

@Component({
  selector: 'sgpmail-mail-content',
  templateUrl: './mail-content.component.html',
  styleUrls: ['./mail-content.component.scss'],
})
export class MailContentComponent implements OnInit {

  @Input() emailData: any;

  firstEmailData: any;
  currentPagination: number = 1;
  clickedEmailData: any;
  loader: boolean = false;

  constructor(private basic: BasicService){

  }

  ngOnInit(): void {
  
    this.onCardClickFetchData();
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['emailData'] &&  changes['emailData'].currentValue  && changes['emailData'].currentValue.length > 0){
      this.fetchFirstEmail(changes['emailData'].currentValue[0].id);
    }
  }

  fetchFirstEmail(id: string){
    this.basic.getEmailbyId(id).subscribe((re)=>{
      this.firstEmailData = re;
      this.loader = false;
    })
  }
  fetchEmailbyId(){

  }

  onCardClickFetchData(currentPage?: number){
    this.loader = true;
   

    if(currentPage === 1 || currentPage === 0){
      if(currentPage == 0){
        const matchingIndex = this.emailData.findIndex((item: { id: any; }) => item.id === this.firstEmailData.id);
        console.log(this.emailData[matchingIndex-1]);
        this.firstEmailData = this.emailData[matchingIndex-1];
        this.currentPagination = this.currentPagination -1  ;
        this.loader = false;
      } else{
        console.log('next');
        const matchingIndex = this.emailData.findIndex((item: { id: any; }) => item.id === this.firstEmailData.id);
        console.log(this.emailData[matchingIndex+1]);
        this.firstEmailData = this.emailData[matchingIndex+1];
        this.currentPagination = this.currentPagination +1;
        this.loader = false;
      }
    } else {
      this.basic.dataEmail$.subscribe(data => {
        this.firstEmailData = data;
        // find pagination from existing email array
        let matchingIndex = this.emailData.map((item: { id: any; }, index: any)=> item.id === data.id ? index  : -1)
        .filter((index: any) => index !== -1)
        .map((index: number) => index +1)
  
        this.currentPagination = matchingIndex;
        this.loader = false;
      });
    }
  }
}
