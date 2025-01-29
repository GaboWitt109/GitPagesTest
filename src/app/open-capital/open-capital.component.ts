import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../home/components/footer/footer.component';
import { HeaderComponent } from '../home/components/header/header.component';
import { RendivaloresAboutComponent } from '../about-us/components/rendivalores-about/rendivalores-about.component';
import { RendivaloresBannerComponent } from '../about-us/components/rendivalores-banner/rendivalores-banner.component';
import { RendivaloresDirectivesComponent } from '../about-us/components/rendivalores-directives/rendivalores-directives.component';
import { RendivaloresMarketComponent } from '../about-us/components/rendivalores-market/rendivalores-market.component';
import { RendivaloresVisionComponent } from '../about-us/components/rendivalores-vision/rendivalores-vision.component';
import { OpenCapitalBannerComponent } from './components/open-capital-banner/open-capital-banner.component';
import { OpenCapitalAboutComponent } from './components/open-capital-about/open-capital-about.component';
import { FondoMutualDescriptionComponent } from './components/fondo-mutual-description/fondo-mutual-description.component';
import { OpenCapitalStarterLinksComponent } from './components/open-capital-starter-links/open-capital-starter-links.component';
import { OpenCapitalBenefitsComponent } from './components/open-capital-benefits/open-capital-benefits.component';
import { OpenCapitalFinancialInformationComponent } from './components/open-capital-financial-information/open-capital-financial-information.component';
import { OpenCapitalFrequentlyAskedQuestionsComponent } from './components/open-capital-frequently-asked-questions/open-capital-frequently-asked-questions.component';

@Component({
  selector: 'app-open-capital',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    OpenCapitalBannerComponent,
    OpenCapitalAboutComponent,
    FondoMutualDescriptionComponent,
    OpenCapitalStarterLinksComponent,
    OpenCapitalBenefitsComponent,
    OpenCapitalFinancialInformationComponent,
    OpenCapitalFrequentlyAskedQuestionsComponent,
  ],
  templateUrl: './open-capital.component.html',
  styleUrl: './open-capital.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenCapitalComponent {}
