import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-open-capital-financial-information',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './open-capital-financial-information.component.html',
  styleUrl: './open-capital-financial-information.component.css',
})
export class OpenCapitalFinancialInformationComponent {
  index1 = Math.floor(Math.random() * 10) + 1;
  index2 = Math.floor(Math.random() * 10) + 1;
}
