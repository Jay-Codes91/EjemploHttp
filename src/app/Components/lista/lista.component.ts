import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/Services/empleados.service';
declare let $: any;
declare var Swal: any;
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  empleados:any[] = [];
  constructor(private ser: EmpleadosService) { }

  ngOnInit(): void {
    this.obtenerEmpleado();
  }

  obtenerEmpleado(){
    this.ser.getEmpleados().subscribe(data =>{
      this.empleados = data;
    })
  }

}
