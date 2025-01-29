import { Component } from '@angular/core';
import { FooterComponent } from '../home/components/footer/footer.component';
import { HeaderComponent } from '../home/components/header/header.component';
import { CloseCapitalBannerComponent } from './components/close-capital-banner/close-capital-banner.component';
import { CloseCapitalAboutComponent } from './components/close-capital-about/close-capital-about.component';
import { CloseCapitalConformedComponent } from "./components/close-capital-conformed/close-capital-conformed.component";
import { FondoMutualCerradoComponent } from "./components/fondo-mutual-cerrado/fondo-mutual-cerrado.component";
import { FondoMutualCerradoDescriptionComponent } from "./components/fondo-mutual-cerrado-description/fondo-mutual-cerrado-description.component";
import { CloseCapitalFaqComponent } from "./components/close-capital-faq/close-capital-faq.component";
import { OpenCapitalFinancialInformationComponent } from "../open-capital/components/open-capital-financial-information/open-capital-financial-information.component";
import { OpenCapitalStarterLinksComponent } from '../open-capital/components/open-capital-starter-links/open-capital-starter-links.component';

@Component({
  selector: 'app-close-capital',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    CloseCapitalBannerComponent,
    CloseCapitalAboutComponent,
    CloseCapitalConformedComponent,
    FondoMutualCerradoComponent,
    FondoMutualCerradoDescriptionComponent,
    CloseCapitalFaqComponent,
    OpenCapitalFinancialInformationComponent,
    OpenCapitalStarterLinksComponent
],
  templateUrl: './close-capital.component.html',
  styleUrl: './close-capital.component.css',
})
export class CloseCapitalComponent {}
