import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CancleBookingsComponent } from './cancle-bookings.component';
const routes: Routes = [{ path: '', component: CancleBookingsComponent }];
@NgModule({
  imports: [CommonModule, IonicModule, CancleBookingsComponent, RouterModule.forChild(routes)]
})
export class CancleBookingsModule { }
