import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  recentPets = [
    { name: 'Martinha', breed: 'Martinha é uma cachorrinha doce e cheia de energia, sempre pronta para brincar e espalhar alegria por onde passa. ', age: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YCbLchWBk9jQ1mkgk0An8SjFpJz88cEzNA&s' },
    { name: 'Ravena',      breed: 'Ravena é uma gatinha tranquila e delicada, que adora companhia e momentos de carinho. Perfeita para quem busca uma amiga calma e amorosa.', age: 1, img: 'https://www.portaldodog.com.br/wp-content/uploads/2024/09/10-motivos-para-o-gato-nao-ter-acesso-a-rua-2.jpg' },
    { name: 'Pretinha', breed: 'Pretinha é uma gatinha calma e charmosa, com um jeitinho doce que conquista fácil. Gosta de sossego e carinho na medida certa.', age: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAhvL5i_gLz4-1mog1N0wjs87v76QSGnrFw&s' },
    { name: 'Bobi',      breed: 'Bobi é um cachorrinho brincalhão e leal, que adora correr e brincar ao ar livre. Perfeito para quem busca um amigo fiel e energético.', age: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTohjaekRTVPku5V62xnWMXlHYbc9YqeZJw&s' },
    { name: 'Maia', breed: 'Maia é uma gatinha extremamente docil e cheia de energia, e não para de brincar nunca. Muito carinhosa, adora receber atenção e retribui com muito amor', age: 1, img: 'https://cdn.pixabay.com/photo/2021/11/07/13/33/cat-6776364_1280.jpg' },
    { name: 'Frajola',      breed: 'Frajola é uma gatinha curiosa e animada, que adora explorar e brincar. Perfeita para quem busca uma amiga divertida e cheia de personalidade.', age: 1, img: 'https://www.petz.com.br/blog/wp-content/uploads/2020/03/gato-de-rua.jpg' }
  ];
}
