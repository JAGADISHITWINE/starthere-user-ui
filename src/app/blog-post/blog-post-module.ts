import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [{ path: '', component: BlogPostComponent }];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, IonicModule, BlogPostComponent, RouterModule.forChild(routes)
  ]
})
export class BlogPostModule { }
