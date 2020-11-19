"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderSummaryComponent = void 0;
var core_1 = require("@angular/core");
var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent(items) {
        this.items = items;
        this.itemsList = [];
        this.increment = 0;
        this.price = 0;
        this.str = '';
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items.getItems().subscribe(function (result) {
            // console.log(result);
            _this.itemsList = result;
            console.log(_this.itemsList[1].price);
        });
    };
    OrderSummaryComponent.prototype.incrementItem = function (name) {
        var found = this.itemsList.find(function (element) { return element.name === name; });
        found.qty += 1;
        found.price *= 2;
        console.log('Element QTY new is', found.qty);
    };
    OrderSummaryComponent.prototype.decrementItem = function (name) {
        var found = this.itemsList.find(function (element) { return element.name === name; });
        if (found.qty > 1) {
            found.qty -= 1;
            found.price /= 2;
            console.log('Element QTY new is', found.qty);
        }
        else {
            console.log('nopee');
        }
    };
    // get item from the DB and display them on the HTML
    OrderSummaryComponent.prototype.shipping = function () {
        for (var _i = 0, _a = this.itemsList; _i < _a.length; _i++) {
            var temp = _a[_i];
            this.str += temp.name + ' ';
        }
        alert("These Items " + this.str + " will be sending in next 48 Hrs...\n            Thank you for being a customer");
    };
    OrderSummaryComponent = __decorate([
        core_1.Component({
            selector: 'app-order-summary',
            templateUrl: './order-summary.component.html',
            styleUrls: ['./order-summary.component.css']
        })
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());
exports.OrderSummaryComponent = OrderSummaryComponent;
