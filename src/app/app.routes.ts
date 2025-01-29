import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OpenCapitalComponent } from './open-capital/open-capital.component';
import { CloseCapitalComponent } from './close-capital/close-capital.component';
import { FarmerStockMarketComponent } from './farmer-stock-market/farmer-stock-market.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rendivalores', component: AboutUsComponent },
  { path: 'open-capital', component: OpenCapitalComponent },
  { path: 'close-capital', component: CloseCapitalComponent },
  { path: 'bolsa_agricola', component: FarmerStockMarketComponent },
];
