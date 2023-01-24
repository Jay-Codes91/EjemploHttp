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

  eliminar(id: number){
    
    Swal.fire({
      icon: 'question',
      title: '¿Quieres eliminar este empleado?',
      showDenyButton: true,
      confirmButtonColor: 'rgb(0, 81, 158)',
      cancelDenyColor: 'rgb(255, 108, 54)',
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    }).then((result: any) => {
      
      if (result.isConfirmed) {
        
         this.ser.delEmp(id).subscribe(data=>{
          Swal.fire({
            icon: 'success',
            title: 'El empleado se ha eliminado exitosamente',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: 'rgb(0, 81, 158)'
          })
          this.obtenerEmpleado();
         })

      } else if (result.isDenied) {
        Swal.fire({
          icon: 'error',
          title: 'Se ha cancelado la operación',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: 'rgb(0, 81, 158)'
        })
      }
    })
  }

}
