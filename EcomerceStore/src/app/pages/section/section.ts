import { Component } from '@angular/core';
import { CarouselImage, CarouselComponent } from './carousel/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './section.html',
  styleUrls: ['./section.scss'],
  imports: [CarouselComponent]
})
export class AppComponent {
  title = 'meu-projeto-carousel';

  // Crie um array de imagens para passar para o carrossel
  sampleImages: CarouselImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
      alt: 'Paisagem de um lago com montanhas ao fundo'
    },
    {
      src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2175&auto=format&fit=crop',
      alt: 'Campos verdes com um rio sinuoso'
    },
    {
      src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop',
      alt: 'Casa de campo perto de um lago cercado por montanhas'
    },
    {
      src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1974&auto=format&fit=crop',
      alt: 'Cachoeira majestosa em uma floresta'
    }
  ];
}