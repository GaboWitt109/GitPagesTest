import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rendivalores-about',
  standalone: true,
  imports: [TranslateModule, MatIcon],
  templateUrl: './rendivalores-about.component.html',
  styleUrl: './rendivalores-about.component.css',
})
export class RendivaloresAboutComponent {}
