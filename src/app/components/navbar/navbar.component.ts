import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private branding: string;

  constructor() {
    this.branding = 'Angular SPA';
  }

  ngOnInit() {
  }

}
