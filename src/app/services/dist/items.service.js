"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemsService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// For cross origin
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ItemsService = /** @class */ (function () {
    function ItemsService(http) {
        this.http = http;
        // URL to web api
        this.companyUrl = 'http://localhost:5000/api/items';
    }
    ItemsService.prototype.addItems = function (items) {
        return this.http.post(this.companyUrl, items, httpOptions);
    };
    ItemsService.prototype.getItems = function () {
        return this.http.get(this.companyUrl);
    };
    ItemsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ItemsService);
    return ItemsService;
}());
exports.ItemsService = ItemsService;
