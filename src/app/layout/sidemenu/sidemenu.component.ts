import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sgpmail-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  @Input() userData: any;
  
  ngOnInit(): void {
  
  }
  
}
