import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BvcInstrumentsComponent } from './components/bvc-instruments/bvc-instruments.component';
import { ProductsServicesComponent } from './components/products-services/products-services.component';
import { RequirementFormsComponent } from './components/requirement-forms/requirement-forms.component';
import { MobileAppComponent } from './components/mobile-app/mobile-app.component';
import { FinancialStatementsComponent } from './components/financial-statements/financial-statements.component';
import { FooterComponent } from './components/footer/footer.component';
import { TerroristFinancingComponent } from './components/terrorist-financing/terrorist-financing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CarouselComponent,
    BvcInstrumentsComponent,
    ProductsServicesComponent,
    RequirementFormsComponent,
    MobileAppComponent,
    FinancialStatementsComponent,
    FooterComponent,
    TerroristFinancingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {}
