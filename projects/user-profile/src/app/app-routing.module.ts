import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:"name",component:UserComponent},
  {path:"userName/:userName",component:PrintComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
