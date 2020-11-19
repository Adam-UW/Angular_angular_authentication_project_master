import { Items } from './../models/items';
import { ItemsService } from './../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  itemsList = [];
  increment: number= 0;
  price: number=0
  str = '';


  constructor(private items: ItemsService) { }

  ngOnInit(): void {
    this.items.getItems().subscribe(result => {
      // console.log(result);
      this.itemsList = result;
      console.log(this.itemsList[1].price);
    });
  }

  incrementItem(name): void {
    const found = this.itemsList.find(element => element.name === name);
    found.qty += 1;
    found.price *= 2;
    console.log('Element QTY new is', found.qty);
  }
  decrementItem(name): void {
    const found = this.itemsList.find(element => element.name === name);
    if(found.qty >1){
    found.qty -= 1;
    found.price /= 2;
    console.log('Element QTY new is', found.qty);
    } else{
      console.log('nopee')
    }

  }

  // get item from the DB and display them on the HTML


  shipping(): void{
    for(let temp of this.itemsList){
      this.str += temp.name + ' ';
    }

    alert(`These Items ${this.str} will be sending in next 48 Hrs...
            Thank you for being a customer`);

  }

}
