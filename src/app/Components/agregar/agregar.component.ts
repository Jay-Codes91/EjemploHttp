import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmpleadosService } from 'src/app/Services/empleados.service';
declare let Swal: any;
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private ser: EmpleadosService) {
    this.form = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],

      apellido1: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],

      apellido2: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],

      correo: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.email
      ])],

      pass: ['']

    })
   }

  ngOnInit(): void {
  }

  agregar(){

    var correo = this.form.get('correo')?.value;
    var palabra = 'emp.';
    var pred = palabra + correo;

    const empleado = {
       nombre: this.form.get('nombre')?.value,
       apellido1: this.form.get('apellido1')?.value,
       apellido2: this.form.get('apellido2')?.value,
       correo: this.form.get('correo')?.value,
       pass: pred
    }

    this.ser.addEmp(empleado).subscribe(data =>{
      Swal.fire({
        icon: 'success',
        title: 'Empleado añadido con éxito',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'rgb(0, 81, 158)'
      });

      this.form.reset();
    })
  }

}
