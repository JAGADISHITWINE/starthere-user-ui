import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  // ✅ Standalone route — outside MainpageComponent so no navbar/header shows
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },

  {
    path: '',
    component: MainpageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./dashboard/dashboard-module').then(m => m.DashboardModule)
      },
      {
        path: 'upcomingtours',
        loadChildren: () =>
          import('./upcomingtours/tours-module').then(m => m.ToursModule)
      },
      {
        path: 'tour-details',
        loadChildren: () =>
          import('./tour-details/tour-details-module').then(m => m.TourDetailsModule)
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./booking/booking-module').then(m => m.BookingModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about-module').then(m => m.AboutModule)
      },
      {
        path: 'faqs',
        loadChildren: () =>
          import('./faqs/faqs-module').then(m => m.FaqsModule)
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog-module').then(m => m.BlogModule)
      },
      {
        path: 'blog-details',
        loadChildren: () =>
          import('./blog-detail/blog-detail-module').then(m => m.BlogDetailModule)
      },
      {
        path: 'my-bookings',
        loadChildren: () =>
          import('./my-bookings/my-bookings-module').then(m => m.MyBookingsModule)
      },
      {
        path: 'cancle-bookings',
        loadChildren: () =>
          import('./cancle-bookings/cancle-bookings-module').then(m => m.CancleBookingsModule)
      }
    ]
  },

  // ✅ Wildcard must always be last
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
