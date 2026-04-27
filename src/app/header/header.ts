import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;

  navItems = [
    { label: 'Início',       route: '/'          },
    { label: 'Campanhas',    route: '/campanhas'  },
    { label: 'Como Doar',    route: '/como-doar'  },
    { label: 'Sobre Nós',    route: '/sobre'      },
    { label: 'Contato',      route: '/contato'    },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
