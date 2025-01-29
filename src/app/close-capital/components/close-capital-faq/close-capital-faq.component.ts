import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-close-capital-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './close-capital-faq.component.html',
  styleUrl: './close-capital-faq.component.css'
})
export class CloseCapitalFaqComponent {
  activeIndex: number | null = null;

  accordionItems = [
    {
      title: '¿Qué es un Fondo Mutual?',
      content:
        'Los Fondos Mutuales son vehículos de inversión que permiten la participación de pequeños y medianos inversionistas en los mercados de valores, mediante la propiedad compartida de carteras de inversión diversificadas y administradas por especialistas en inversiones. En particular, los fondos mutuales de inversión de capital abierto son aquellos cuyo capital es susceptible de aumento por aportes de los inversionistas, de nuevos inversionistas y de disminución por retiro parcial o total de los aportes, sin necesidad de convocar a una asamblea de inversionistas.',
    },
    {
      title: '¿Cada cuánto tiempo se publica el valor de la acción?',
      content:
        'Los elementos que constituyen el valor de nuestra acción (RFM) cambian a diario, ya que la cantidad de acciones también cambia como consecuencia de las nuevas suscripciones y rescates solicitados por los clientes. Por eso, el valor de la acción se calcula a diario.',
    },
    {
      title: '¿Cómo se calcula el Valor de la acción?',
      content:
        '',
    }
  ];

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}