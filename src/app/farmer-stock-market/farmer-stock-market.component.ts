import { Component } from '@angular/core';
import { FooterComponent } from '../home/components/footer/footer.component';
import { HeaderComponent } from '../home/components/header/header.component';
import { FarmerStockBannerComponent } from "./farmer-stock-banner/farmer-stock-banner.component";
import { FarmerStockAboutComponent } from "./farmer-stock-about/farmer-stock-about.component";
import { FarmerStockInvestComponent } from "./farmer-stock-invest/farmer-stock-invest.component";
import { FarmerStockOperationsComponent } from "./farmer-stock-operations/farmer-stock-operations.component";
import { FarmerStockOpenAccountComponent } from "./farmer-stock-open-account/farmer-stock-open-account.component";

@Component({
  selector: 'app-farmer-stock-market',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    FarmerStockBannerComponent,
    FarmerStockAboutComponent,
    FarmerStockInvestComponent,
    FarmerStockOperationsComponent,
    FarmerStockOpenAccountComponent
],
  templateUrl: './farmer-stock-market.component.html',
  styleUrl: './farmer-stock-market.component.css'
})
export class FarmerStockMarketComponent {

}
