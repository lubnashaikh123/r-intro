import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { AdminsComponent } from './shared/components/admins/admins.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UsersComponent,
    ProductsComponent,
    AdminsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    
    
  ],
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
