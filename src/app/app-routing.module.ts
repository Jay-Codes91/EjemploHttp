import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista',
    loadChildren: ()=> import('./Components/lista/lista.module').then(m=> m.ListaModule)
  },
  {
    path: 'agregar',
    loadChildren: ()=> import('./Components/agregar/agregar.module').then(m=> m.AgregarModule)
  },
  {
    path: '',
    loadChildren: ()=> import('./Components/lista/lista.module').then(m => m.ListaModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
