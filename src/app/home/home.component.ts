import { ItemsService } from './../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Items } from './../models/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notify: string;
  items = [];

  constructor(private router: Router, private route: ActivatedRoute, private item: ItemsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const key1 = 'loggedin';
      if (params[key1] === 'success') {
        this.notify = 'You have been successfully loggedin. Welcome home';
      }
    });
  }

  add_items(uname, price: number): void {
    if (uname && price) {
      if (this.items.length === 0) {
        console.log('Yes the list was empty ////')

        let obj = {
          name: uname,
          price: price,
          qty: 1
        }
        this.items.push(obj); // Add to a list to make sure the cutomer already placed this item
        this.item.addItems(obj).subscribe(data => {
          console.log('data has inserted to the Db');
        });

        alert(`${uname} Item has added to the order summary`);
      } else {
        const found = this.items.find(element => element.name === uname);
        console.log('This is found', found.name);

        if(!found){
            let obj = {
              name: uname,
              price: price,
              qty: 1
            }

            this.items.push(obj);

            this.item.addItems(obj).subscribe(data => {
              console.log('data has inserted to the Db');
            });
        } else {
          alert('Item is already added to the cart!');
        }

        // for (let temp of this.items) {
        //   if (temp.name !== uname) {
        //     console.log('this items was not exist');

        //     let obj = {
        //       name: uname,
        //       price: price,
        //       qty: 1
        //     }

        //     this.items.push(obj);

        //     this.item.addItems(obj).subscribe(data => {
        //       console.log('data has inserted to the Db');
        //     });

        //     break;
        //   } else {
        //     alert('Item has added already !!!!');
        //   }
        // }
      }
    }

    console.log('The list contains ==>', this.items);
  }

}
