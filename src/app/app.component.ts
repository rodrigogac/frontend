import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'sispim';
  showFooter: boolean = true;
  showHeader: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Oculta o footer apenas na página de login (raiz)
        this.showFooter = !(event.url === '/' || event.url === '');
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Oculta o header apenas na página de login (raiz)
        this.showHeader = !(event.url === '/' || event.url === '');
      }
    });
  }
}
