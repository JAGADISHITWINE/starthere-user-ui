import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyBookingsComponent } from './my-bookings.component';
const routes: Routes = [{ path: '', component: MyBookingsComponent }];
@NgModule({
  imports: [CommonModule, IonicModule, MyBookingsComponent, RouterModule.forChild(routes)]
})
export class MyBookingsModule { }
