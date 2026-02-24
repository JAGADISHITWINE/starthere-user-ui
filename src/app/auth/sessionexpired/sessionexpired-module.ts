import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SessionexpiredComponent } from './sessionexpired.component';


const routes: Routes = [{ path: '', component: SessionexpiredComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, IonicModule, SessionexpiredComponent, RouterModule.forChild(routes)
  ]
})
export class SessionexpiredModule { }
