import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo:'template/fluid',pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
  { path: 'template', loadChildren: () => import('./templates/templates.module').then(x => x.TemplatesModule) },
  { path:'**', redirectTo:'template/fluid'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }