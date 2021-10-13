import { ContenidoComponent } from './contenido/contenido.component';
import { Contenido2Component } from './contenido2/contenido2.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'contenido',component:ContenidoComponent},
  {path: 'contenido2', component:Contenido2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
