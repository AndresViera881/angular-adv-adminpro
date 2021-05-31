import { NgModule } from '@angular/core';
//MODULOS
import { PagesRoutingModule } from './pages/pages.routing';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';

//AuthRoutingModule

const routes: Routes =[

  //{path: '', redirectTo: '/dashboard', pathMatch:'full'},

  //el path viene de AuthRoutingModule
  //path: '/auth' AuthRouting
  //path: '/medicos' MedicosRouting
  //path: '/compras' ComprasRouting
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path:'**', component:NopagefoundComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
