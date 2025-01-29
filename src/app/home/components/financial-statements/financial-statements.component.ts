import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-financial-statements',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './financial-statements.component.html',
  styleUrl: './financial-statements.component.css',
})
export class FinancialStatementsComponent {
  private hello = 'hi';
}
