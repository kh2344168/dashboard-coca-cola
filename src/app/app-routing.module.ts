import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FactoryPageComponent } from './factory-page/factory-page.component';
import { LineComponent } from './line/line.component';


const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'factory-page', component: FactoryPageComponent },
  { path:'line', component: LineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
