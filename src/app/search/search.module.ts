import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './search.component';
const routes: Routes = [{ path: '', component: SearchComponent }];
@NgModule({
  imports: [CommonModule, IonicModule, SearchComponent, RouterModule.forChild(routes)]
})
export class SearchModule { }