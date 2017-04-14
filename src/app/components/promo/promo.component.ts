import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  private promoTitle: string;
  private promoText: string;
  private promoCTA: string;

  constructor() { 
    this.promoTitle = 'Promo Title';
    this.promoText = 'This is the best promo ever!';
    this.promoCTA = 'Claim Promo';
  }

  ngOnInit() {
  }

}
