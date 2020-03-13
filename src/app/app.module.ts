import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AngularWebStorageModule } from 'angular-web-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMedicinesComponent } from './my-medicines/my-medicines.component';
import { SignComponent } from './sign/sign.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { FeaturesComponent } from './features/features.component';
import { SupportComponent } from './support/support.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { MedicinesInfoComponent } from './medicines-info/medicines-info.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { RegisterConfirmComponent } from './register-confirm/register-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMedicinesComponent,
    SignComponent,
    MedicinesComponent,
    FeaturesComponent,
    SupportComponent,
    RegisterComponent,
    CheckoutComponent,
    CartComponent,
    MedicinesInfoComponent,
    OrderconfirmationComponent,
    RegisterConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
