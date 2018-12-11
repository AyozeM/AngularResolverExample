import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { AccountListComponent } from './views/account-list/account-list.component';
import { AccountDetailsComponent } from './views/account-details/account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountListComponent,
    AccountDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
