import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { AuthModalComponent } from './shared/auth-modal/auth-modal.component';
import { AuthClickDirective } from './core/auth-click.directive';
import { BackBlockService } from './core/back-block.service';
import { TermsandconditionsModule } from './Quicklinks/termsandconditions/termsandconditons-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,MainpageComponent, TermsandconditionsModule, HttpClientModule, AuthModalComponent, AuthClickDirective,IonicModule.forRoot()],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BackBlockService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
