import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SucursalModel } from '../models/SucursalModel';

@Injectable({
  providedIn: 'root'
})


export class ApiSucursalesService {

  public url = 'http://127.0.0.1:5000/api/get_sucursales';

  constructor(private http: HttpClient) { }

  get_sucursales(){
    return this.http.get(this.url);
  }

  post_sucursales(sucursal: SucursalModel){
    return this.http.post(this.url, sucursal);
  }

  put_sucursales(sucursal: SucursalModel){
    return this.http.put(this.url, sucursal);
  }

  deletePaciente(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }


}
