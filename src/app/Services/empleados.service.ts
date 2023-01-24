import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  url = "https://localhost:7193/api/Empleados";
  constructor(private _http: HttpClient) { 

  }

  getEmpleados():Observable<any>{
    return this._http.get(this.url);
  }
}
