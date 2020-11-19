"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var user_component_1 = require("./user/user.component");
var admin_component_1 = require("./admin/admin.component");
var form_address_component_1 = require("./form-address/form-address.component");
var order_summary_component_1 = require("./order-summary/order-summary.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var profile_component_1 = require("./profile/profile.component");
var home_component_1 = require("./home/home.component");
var auth_guard_1 = require("./auth/auth.guard");
var services_component_1 = require("./services/services.component");
var companies_list_component_1 = require("./companies-list/companies-list.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'services', component: services_component_1.ServicesComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'companies-list', component: companies_list_component_1.CompaniesListComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'order-summary', component: order_summary_component_1.OrderSummaryComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'form-address', component: form_address_component_1.FormAddressComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'user', component: user_component_1.UserComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [auth_guard_1.AuthGuard]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
