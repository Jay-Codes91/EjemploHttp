import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from './Services/empleados.service';
declare let $: any;
declare var Swal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Empleados';
  empleados:any[] = [];

  constructor(private ser: EmpleadosService){
     
  }

  ngOnInit(): void {
    $("h1").html("Empleados");
    this.obtenerEmpleado();
  }

  obtenerEmpleado(){
    this.ser.getEmpleados().subscribe(data =>{
      this.empleados = data;
    })
  }

  msj(){
    Swal.fire({
      icon: 'success',
      title: 'Correcto'
    })
  }
}
