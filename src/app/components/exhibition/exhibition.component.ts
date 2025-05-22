import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ExhibitionCardComponent } from '../exhibition-card/exhibition-card.component';
import { CarouselComponent } from '../../shared/carousel/carousel/carousel.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-exhibition',
  imports: [CommonModule, ExhibitionCardComponent, CarouselComponent, MatIconModule],
  templateUrl: './exhibition.component.html',
  styleUrl: './exhibition.component.scss'
})
export class ExhibitionComponent {
  @ViewChild('exhibitionCarousel') exhibitionCarouselRef!: CarouselComponent;

  goToNextExhibition() {
    this.exhibitionCarouselRef.next();
  }

  goToPrevExhibition() {
    this.exhibitionCarouselRef.prev();
  }
  exhibitionData:
    {
      "nomi": string,
      "image": string,
      "sana": string,
      "manzil": string,
    }[]
    = [
      {
        "nomi": "Xalqaro zardo'zlik va zargarlik festivali",
        "image": "/assets/exhibition/image.png",
        "sana": "10.05.2025 - 15.05.2025",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
      },
      {
        "nomi": "Xalqaro zardo'zlik va zargarlik festivali",
        "image": "/assets/exhibition/image-1.png",
        "sana": "10.05.2025 - 15.05.2025",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
      },
      {
        "nomi": "Xalqaro zardo'zlik va zargarlik festivali",
        "image": "/assets/exhibition/image-2.png",
        "sana": "10.05.2025 - 15.05.2025",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
      },
      {
        "nomi": "Xalqaro zardo'zlik va zargarlik festivali",
        "image": "/assets/exhibition/image-3.png",
        "sana": "10.05.2025 - 15.05.2025",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
      },
      {
        "nomi": "Xalqaro zardo'zlik va zargarlik festivali",
        "image": "/assets/exhibition/image-4.png",
        "sana": "10.05.2025 - 15.05.2025",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
      },
      {
        "nomi": "Xalqaro zardo'zlik va zargarlik festivali",
        "image": "/assets/exhibition/image-5.png",
        "sana": "10.05.2025 - 15.05.2025",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
      }
    ]
}
