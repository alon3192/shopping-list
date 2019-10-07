import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  sidebarMode = false;
  touched = false;

  ngOnInit() {
  }

  openSidebar()
  {
    this.sidebarMode = true;
    this.touched = true;
  }
  closeSidebar()
  {
    this.sidebarMode = false;
    console.log(this.sidebarMode);
    
  }

  getDisabledClass()
  {
    if(!this.touched)
    {
      return "no_touched";
    }
    else if(this.sidebarMode)
    {
      return "disabled_screen";
    }
    else
    {
      return "disabled_screen_disappear_animation";
    }
  }

}
