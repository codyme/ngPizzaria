import { Component, OnInit } from '@angular/core';

import { Pizza } from '../../pizza';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  toppings = ['Vegetarian', 'Meat Lovers', 'Hawaian', 'Supreme'];
  crusts = ['Cheesy', 'Thin & crispy', 'Traditional']

  model = new Pizza(10, '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newOrder() {
    this.model = new Pizza(50, '', '');
  }

}
