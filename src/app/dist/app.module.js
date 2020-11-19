"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var profile_component_1 = require("./profile/profile.component");
var auth_module_1 = require("./auth/auth.module");
var services_component_1 = require("./services/services.component");
var companies_list_component_1 = require("./companies-list/companies-list.component");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
// Material UI
var card_1 = require("@angular/material/card");
var order_summary_component_1 = require("./order-summary/order-summary.component");
var form_address_component_1 = require("./form-address/form-address.component");
var admin_component_1 = require("./admin/admin.component");
var user_component_1 = require("./user/user.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                profile_component_1.ProfileComponent,
                services_component_1.ServicesComponent,
                companies_list_component_1.CompaniesListComponent,
                order_summary_component_1.OrderSummaryComponent,
                form_address_component_1.FormAddressComponent,
                admin_component_1.AdminComponent,
                user_component_1.UserComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                auth_module_1.AuthModule,
                animations_1.BrowserAnimationsModule,
                card_1.MatCardModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
