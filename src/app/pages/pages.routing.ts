import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages/pages.component";
import { SucursalListComponent } from '../components/Optica/sucursal/sucursal-list/sucursal-list.component';


const routes: Routes =[
  {
    path:'dashboard', component: PagesComponent,
    children:[
      {path:'', component: DashboardComponent},
      {path:'progress', component: ProgressComponent},
      {path:'grafica1', component: Grafica1Component},
      //{path: '', redirectTo: '/dashboard', pathMatch:'full'},
      {path: 'sucursal-list', component: SucursalListComponent}

    ]
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true}),
    FormsModule,

  ],
  exports:[RouterModule]
})

export class PagesRoutingModule{}

