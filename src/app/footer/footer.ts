import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();

  links = {
    institucional: [
      { label: 'Sobre Nós',         route: '/sobre'      },
      { label: 'Nossa Missão',      route: '/sobre'      },
      { label: 'Transparência',     route: '/sobre'      },
      { label: 'Parceiros',         route: '/parceiros'  },
    ],
    ajuda: [
      { label: 'Como Doar',         route: '/como-doar'  },
      { label: 'Campanhas Ativas',  route: '/campanhas'  },
      { label: 'FAQ',               route: '/faq'        },
      { label: 'Contato',           route: '/contato'    },
    ],
    legal: [
      { label: 'Política de Privacidade', route: '/privacidade' },
      { label: 'Termos de Uso',           route: '/termos'      },
    ],
  };
}
