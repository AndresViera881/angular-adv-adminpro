import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalModel } from '../../models/SucursalModel';
import { ApiSucursalesService } from '../../services/api-sucursal.service';

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './sucursal-list.component.html',
  styleUrls: ['./sucursal-list.component.css']
})
export class SucursalListComponent implements OnInit {


  mostrarTablaSucursal: SucursalModel[]=[];

  constructor(private service: ApiSucursalesService, private router: Router, private datePipe: DatePipe) {
    this.service.get_sucursales().subscribe((res:any) =>{
      console.log(res);
      this.mostrarTablaSucursal = res;
  });
  }

  ngOnInit(){

  }



}
