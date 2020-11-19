"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormAddressComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormAddressComponent = /** @class */ (function () {
    function FormAddressComponent() {
        this.productRef = new forms_1.FormGroup({
            email: new forms_1.FormControl(),
            zipcode: new forms_1.FormControl(),
            phone: new forms_1.FormControl()
        });
    }
    FormAddressComponent.prototype.ngOnInit = function () {
    };
    FormAddressComponent.prototype.address = function () {
        if (this.productRef.value.email && this.productRef.value.zipcode
            && this.productRef.value.phone) {
            //Todo No enough time Ugh
            console.log(this.productRef.value);
            alert('Your new address has been updated..');
        }
        else {
            alert('Please fill all the fields !!!!');
        }
    };
    FormAddressComponent = __decorate([
        core_1.Component({
            selector: 'app-form-address',
            templateUrl: './form-address.component.html',
            styleUrls: ['./form-address.component.css']
        })
    ], FormAddressComponent);
    return FormAddressComponent;
}());
exports.FormAddressComponent = FormAddressComponent;
