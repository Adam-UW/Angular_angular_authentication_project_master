"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route, item) {
        this.router = router;
        this.route = route;
        this.item = item;
        this.items = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var key1 = 'loggedin';
            if (params[key1] === 'success') {
                _this.notify = 'You have been successfully loggedin. Welcome home';
            }
        });
    };
    HomeComponent.prototype.add_items = function (uname, price) {
        if (uname && price) {
            if (this.items.length === 0) {
                console.log('Yes the list was empty ////');
                var obj = {
                    name: uname,
                    price: price,
                    qty: 1
                };
                this.items.push(obj); // Add to a list to make sure the cutomer already placed this item
                this.item.addItems(obj).subscribe(function (data) {
                    console.log('data has inserted to the Db');
                });
                alert(uname + " Item has added to the order summary");
            }
            else {
                var found = this.items.find(function (element) { return element.name === uname; });
                console.log('This is found', found.name);
                if (!found) {
                    var obj = {
                        name: uname,
                        price: price,
                        qty: 1
                    };
                    this.items.push(obj);
                    this.item.addItems(obj).subscribe(function (data) {
                        console.log('data has inserted to the Db');
                    });
                }
                else {
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
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
