import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BasicService } from './shared/basic.service';
import { User } from '../models/user.model';

@Component({
  selector: 'sgpmail-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  dummyProfile!: User;
  dummyImages: any;
  dummyEmailData: any;
  scrollItemsWidth = 0;
  isMobile = false;
  activeScreen =false;
  contenActive = false;
  cardClick= false;
  darkToggle= false;
  isLoading = true;
  constructor(private basic: BasicService){

  }

  ngOnInit(): void {
    
    this.checkDeviceWidth();
  
      this.fetchUsers();
  }

  checkDeviceWidth() {
    this.isMobile = window.innerWidth < 980; // Adjust the breakpoint as per your needs
  }
  @HostListener('window:resize')
  onResize() {
    this.checkDeviceWidth();

  }

  handleCardEvent(e: Event){
    this.cardClick = true;
  }


  fetchUsers(){
    this.basic.getUsers().subscribe((res)=>{
      this.dummyProfile = res.data[0];
      this.fetchMail();
    })
  }
  fetchMail(){
    this.basic.getEmails().subscribe((re)=>{
      this.dummyEmailData = re.data;
      this.isLoading = false;
    })
  }



  scrollToFirst() {
    const container: HTMLElement = this.scrollContainer.nativeElement;
    const firstDiv: HTMLElement = container.querySelector('.mainwrap__nav') as HTMLElement;
    firstDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToLast() {
    const container: HTMLElement = this.scrollContainer.nativeElement;
    const lastDiv: HTMLElement = container.querySelector('.mainwrap__emailcontent') as HTMLElement;
    lastDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }


 

}
