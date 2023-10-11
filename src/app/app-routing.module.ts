import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'main',component:AppComponent},
  {path:'aboutme',component:AboutmeComponent},
  {path:'',redirectTo:'/main',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
