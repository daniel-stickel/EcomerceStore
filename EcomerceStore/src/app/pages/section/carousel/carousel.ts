import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface para definir a estrutura de cada slide
export interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss']
})

export class CarouselComponent implements OnInit {
  
  // O componente receberá um array de imagens do componente pai
  @Input() images: CarouselImage[] = [];

  // Index do slide atualmente visível
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Vai para o slide anterior.
   * Se estiver no primeiro slide, volta para o último.
   */
  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.images.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  /**
   * Vai para o próximo slide.
   * Se estiver no último slide, volta para o primeiro.
   */
  goToNext(): void {
    const isLastSlide = this.currentIndex === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  /**
   * Vai para um slide específico clicando em um dos "dots" (indicadores).
   * @param slideIndex O index do slide para o qual navegar.
   */
  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}