import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActualizacionesComponent} from './public/components/pages/rdv/actualizaciones/actualizaciones.component';

const routes: Routes = [{
  path:'', component:ActualizacionesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
