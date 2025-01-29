import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { last } from 'rxjs';
import {
  Collapse,
  CollapseOptions,
  Dropdown,
  DropdownInterface,
  DropdownOptions,
  InstanceOptions,
} from 'flowbite';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  @Input() activeKey!: string;

  // dropdown
  @ViewChild('dropdownNavbar', { static: false })
  dropdownNavbar!: ElementRef<HTMLElement>;
  @ViewChild('dropdownNavbarLink', { static: false })
  dropdownNavbarLink!: ElementRef<HTMLElement>;
  dropdown!: DropdownInterface;

  //mobileMenu
  @ViewChild('navbarDropdown', { static: false })
  navbarDropdown!: ElementRef<HTMLElement>;
  @ViewChild('navbarDropdownMenu', { static: false })
  navbarDropdownMenu!: ElementRef<HTMLElement>;
  mobileMenu!: Collapse;

  protected readonly last = last;

  ngAfterViewInit() {
    // console.log(this.dropdownNavbar.nativeElement);
    // console.log(this.dropdownNavbarLink.nativeElement);

    const options: DropdownOptions = {
      placement: 'bottom',
      triggerType: 'click',
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
    };

    // instance options object
    const instanceOptions: InstanceOptions = {
      id: 'dropdownMenu',
      override: true,
    };

    this.dropdown = new Dropdown(
      this.dropdownNavbar.nativeElement,
      this.dropdownNavbarLink.nativeElement,
      options,
      instanceOptions,
    );

// optional options with default values and callback functions
    const optionsMenu: CollapseOptions = {};

// instance options object
    const instanceMenuOptions: InstanceOptions = {
      id: 'targetEl',
      override: true,
    };

// Crea una instancia de Collapse para el menú móvil
    this.mobileMenu = new Collapse(
      this.navbarDropdownMenu.nativeElement, // El contenedor del menú
      this.navbarDropdown.nativeElement,    // El botón que activa el menú
      optionsMenu,
      instanceMenuOptions,
    );
  }

  onOptionClick() {
    this.dropdown.hide();
  }
}
