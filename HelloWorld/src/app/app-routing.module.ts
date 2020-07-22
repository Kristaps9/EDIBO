import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent} from './weather/weather.component';
import { CurrencyComponent} from './currency/currency.component';
import { ProfileComponent} from './profile/profile.component';


const routes: Routes = [
{ path: "weather", component:WeatherComponent},
{ path: "currency", component:CurrencyComponent},
{ path: "profile", component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
