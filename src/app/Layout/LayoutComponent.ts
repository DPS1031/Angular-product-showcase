import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Header/HeaderComponent";
import { FooterComponent } from "./Footer/FooterComponent";

@Component({

  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>

      <main class="flex-1 overflow-y-hidden bg-white">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `

})

export class LayoutComponent { }
