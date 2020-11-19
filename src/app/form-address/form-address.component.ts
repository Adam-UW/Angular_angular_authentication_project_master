import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  productRef= new FormGroup({
    email: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }


  address():void{
    if(this.productRef.value.email && this.productRef.value.zipcode
      && this.productRef.value.phone){
          //Todo No enough time Ugh
    console.log(this.productRef.value)
    alert('Your new address has been updated..')
    } else {
      alert('Please fill all the fields !!!!')
    }

  }
}
