import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent} from './weather/weather.component';
import { CurrencyComponent} from './currency/currency.component';
import { ProfileComponent} from './profile/profile.component';
import {DepartmentListComponent} from './department-list/department-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';


const routes: Routes = [
{ path: "weather", component:WeatherComponent},
{ path: "currency", component:CurrencyComponent},
{ path: "profile", component:ProfileComponent},
{ path: "departments", component:DepartmentListComponent},
{ path: "employees", component:EmployeeListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,EmployeeListComponent]
