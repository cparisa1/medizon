import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMedicinesComponent } from '../app/my-medicines/my-medicines.component';
import { SignComponent } from '../app/sign/sign.component';
import { MedicinesComponent } from '../app/medicines/medicines.component';
import { FeaturesComponent } from '../app/features/features.component';
import { SupportComponent } from '../app/support/support.component';
import { RegisterComponent } from '../app/register/register.component';
import { CheckoutComponent } from '../app/checkout/checkout.component';
import { CartComponent } from '../app/cart/cart.component';
import { RegisterConfirmComponent } from '../app/register-confirm/register-confirm.component';
import { MedicinesInfoComponent } from '../app/medicines-info/medicines-info.component';
import { OrderconfirmationComponent } from '../app/orderconfirmation/orderconfirmation.component';

const routes: Routes = [
  { path: '', component: MyMedicinesComponent },
  { path: 'signin', component: SignComponent },
  { path: 'medicines', component: MedicinesComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'support', component: SupportComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'cart', component: CartComponent},
  { path: 'medicines-info', component: MedicinesInfoComponent},
  { path: 'medicines/:id', component: MedicinesInfoComponent},
  { path: 'orderconfirmation', component: OrderconfirmationComponent},
  { path: 'registerConfirm', component: RegisterConfirmComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
