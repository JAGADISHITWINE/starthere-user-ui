import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';           // ← added
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { AuthModalComponent } from './shared/auth-modal/auth-modal.component';
import { AuthClickDirective } from './core/auth-click.directive';
import { BackBlockService } from './core/back-block.service';
import { TermsandconditionsModule } from './Quicklinks/termsandconditions/termsandconditons-module';
import { AUTH_INTERCEPTOR_PROVIDER } from './core/auth.interceptor';
import { ERROR_INTERCEPTOR_PROVIDER } from './core/error.interceptor';
import { Sessionexpired } from './auth/sessionexpired/sessionexpired';
import { SessionexpiredComponent } from './auth/sessionexpired/sessionexpired.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MainpageComponent,
    TermsandconditionsModule,
    HttpClientModule,
    AuthModalComponent,
    AuthClickDirective,
    SessionexpiredComponent, // ← standalone: imported here, not declared
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BackBlockService,
    Sessionexpired,               // ← added
    AUTH_INTERCEPTOR_PROVIDER,
    ERROR_INTERCEPTOR_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}