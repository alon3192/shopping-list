import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openResume()
  {
    window.open("https://drive.google.com/open?id=1SH-qnUmE4urKjsfwgw8I7iN_3xrSsh27");
  }

}
