import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-cachorros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-cachorros.html',
  styleUrl: './lista-cachorros.css'
})
export class ListaCachorros {
  pets = [
    { name: 'Francisco', breed: 'Vira lata', age: 3, img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=160&fit=crop' },
    { name: 'Maia',      breed: 'Vira lata', age: 2, img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=160&fit=crop' },
    { name: 'Kleber',    breed: 'Dálmata',   age: 3, img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=160&fit=crop' },
    { name: 'Francisco', breed: 'Vira lata', age: 3, img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=160&fit=crop' },
  ];
}
