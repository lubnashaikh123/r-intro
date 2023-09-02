import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { AdminsComponent } from './shared/components/admins/admins.component';
const routes :Routes=[
  {
    path:'',component:DashBoardComponent,
  },
  {
    path:'home',component:DashBoardComponent,
  },
  {
    path:'users',component:UsersComponent,
  },
  {
    path:'products',component:ProductsComponent,
  },
  {
    path:'admins',component:AdminsComponent,
  },
]
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UsersComponent,
    ProductsComponent,
    AdminsComponent,
    
  ],
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
