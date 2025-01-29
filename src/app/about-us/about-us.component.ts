import { Component } from '@angular/core';
import { HeaderComponent } from '../home/components/header/header.component';
import { RendivaloresBannerComponent } from './components/rendivalores-banner/rendivalores-banner.component';
import { RendivaloresAboutComponent } from './components/rendivalores-about/rendivalores-about.component';
import { RendivaloresVisionComponent } from './components/rendivalores-vision/rendivalores-vision.component';
import { RendivaloresMarketComponent } from './components/rendivalores-market/rendivalores-market.component';
import { RendivaloresDirectivesComponent } from './components/rendivalores-directives/rendivalores-directives.component';
import { FooterComponent } from '../home/components/footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    HeaderComponent,
    RendivaloresBannerComponent,
    RendivaloresAboutComponent,
    RendivaloresVisionComponent,
    RendivaloresMarketComponent,
    RendivaloresDirectivesComponent,
    FooterComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
