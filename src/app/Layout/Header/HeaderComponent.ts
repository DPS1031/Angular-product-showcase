import { Component, HostListener, viewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router'

type MenuKey = "Product" | "Mundo" | "Contact" | "Lang";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './HeaderComponent.html',
  styleUrls: ['./HeaderComponent.css']
})

export class HeaderComponent {

  constructor(private router: Router){};

  headerRoot = viewChild<ElementRef>('headerRoot');

  Menus = {
    Product: false,
    Mundo: false,
    Contact: false,
    Lang: false
  };

  SearchBar = {
    Search: false,
  };

  toggleMenu(menu: MenuKey) {
    for (let key in this.Menus) {
      if (key !== menu) {
        this.Menus[key as MenuKey] = false;
      }
    }
    this.Menus[menu] = !this.Menus[menu];
  }

  navigateToProducts() {
    this.Menus.Product = false;
    this.router.navigate(['/products']); // Luego navegamos
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const root = this.headerRoot();
    if (root && !root.nativeElement.contains(event.target)) {
      this.closeAllMenus();
      this.closeSearchBar();
    }
  }

  closeAllMenus() {
    for (let key in this.Menus) {
      this.Menus[key as keyof typeof this.Menus] = false;
    }
  }

  closeSearchBar() {
    for (let key in this.SearchBar) {
      this.SearchBar[key as keyof typeof this.SearchBar] = false;
    }
  }

  isVisible = true;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 500) {
      this.isVisible = false;
    } else if (currentScroll < this.lastScrollTop && currentScroll < 800) {
      this.isVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  HeaderImage2 = 'assets/images/HeaderImages/HeaderImage2.png'
}


