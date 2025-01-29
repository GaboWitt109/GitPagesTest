import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-capital-frequently-asked-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-capital-frequently-asked-questions.component.html',
  styleUrl: './open-capital-frequently-asked-questions.component.css',
})
export class OpenCapitalFrequentlyAskedQuestionsComponent {
  activeIndex: number | null = null;

  accordionItems = [
    {
      title: 'Información Financiera',
      content:
        'Los Fondos Mutuales son vehículos de inversión que permiten la participación de pequeños y medianos inversionistas en los mercados de valores, mediante la propiedad compartida de carteras de inversión diversificadas y administradas por especialistas en inversiones. En particular, los fondos mutuales de inversión de capital abierto son aquellos cuyo capital es susceptible de aumento por aportes de los inversionistas, de nuevos inversionistas y de disminución por retiro parcial o total de los aportes, sin necesidad de convocar a una asamblea de inversionistas.',
    },
    {
      title: '¿Qué es una Unidad de Inversión?',
      content:
        'Las Unidades de Inversión (U.I.), representan la proporción de inversión realizada por el inversionista con respecto a su participación sobre el patrimonio del fondo. Las características de la Unidad de Inversión son las siguientes: Nominativas, comunes, fraccionables e intransferibles, que no podrán inscribirse en las Bolsas de Valores, y que otorgan los mismos derechos y confieren a sus titulares participación proporcional en el patrimonio del Fondo Mutual de Inversión de Capital Abierto.',
    },
    {
      title: '¿Qué es el VUI?',
      content:
        'El Valor de la Unidad de Inversión (V.U.I) es el precio que tiene cada una de las acciones o unidades de inversión en circulación del “Rendivalores Fondo Mutual de Inversión de Capital Abierto, C.A”. Esta cifra es la que determina el precio de suscripción y rescate de las acciones o unidades de inversión del Fondo Mutual. También sirve para conocer el rendimiento que ha obtenido el cliente con su inversión.',
    },
    {
      title: '¿Cada cuánto tiempo se publica el VUI?',
      content:
        'Los elementos que constituyen el Valor de las Unidades de Inversión (V.U.I) cambian a diario. Por una parte, los títulos valores que componen la cartera de inversión del Fondo Mutual varían su precio todos los días, de acuerdo al comportamiento de la oferta y demanda de los mismos en el mercado de valores. Por otro lado, la cantidad de acciones o unidades de inversión también cambia, como consecuencia de las nuevas suscripciones y rescates solicitados por los clientes. Por eso, el V.U.I se calcula a diario',
    },
    {
      title: '¿Cómo se calcula el Valor de la Unidad de Inversión?',
      content:
        'El Valor de Unidad de Inversión (V.U.I.) correspondiente a cada una de las acciones en circulación del Fondo Mutual se calcula restando al valor de las inversiones y demás activos del Fondo Mutual, el pasivo; la cifra así obtenida se divide entre el número de acciones suscritas para ese día. Esta cifra es la que determina el precio de suscripción y recompra de las acciones del Fondo Mutual.',
      extra: 'V.U.I. = (Activo – Pasivo) / Total de Unidades de Inversión'
    },
  ];

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
