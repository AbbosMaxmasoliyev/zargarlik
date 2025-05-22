import { Component, ViewChild } from '@angular/core';
import { SchoolCardComponent } from "../school-card/school-card.component";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarouselComponent } from "../../shared/carousel/carousel/carousel.component";
import { MatIconModule } from '@angular/material/icon';

interface School {
  "nomi": string,
  "manzil": string,
  "image": string
}
@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [SchoolCardComponent, CommonModule, CarouselComponent, MatIconModule],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss',

})
export class SchoolsComponent {
  products: School[] | undefined;
  @ViewChild(CarouselComponent) carouselRef!: CarouselComponent;
  responsiveOptions: any[] | undefined;
  goNext() {
    this.carouselRef.next();
  }

  goPrev() {
    this.carouselRef.prev();
  }

  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }


  schools: {
    "nomi": string,
    "manzil": string,
    "image": string
  }[] = [
      {
        "nomi": "Toshkent Zargarlik maktabi",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
        "image": "/assets/schools/image.png"
      },
      {
        "nomi": "Toshkent Zargarlik maktabi",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
        "image": "/assets/schools/image-1.png"
      },
      {
        "nomi": "Toshkent Zargarlik maktabi",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
        "image": "/assets/schools/image-2.png"
      },
      {
        "nomi": "Toshkent Zargarlik maktabi",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
        "image": "/assets/schools/image-3.png"
      },
      {
        "nomi": "Toshkent Zargarlik maktabi",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
        "image": "/assets/schools/image-4.png"
      },
      {
        "nomi": "Toshkent Zargarlik maktabi",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
        "image": "/assets/schools/image-5.png"
      },
      {
        "nomi": "Toshkent Zargarlik maktabi",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
        "image": "/assets/schools/image-6.png"
      },
      {
        "nomi": "Toshkent Zargarlik maktabi",
        "manzil": "100170, Toshkent, Mirzo-Ulug'bek tumani, Sayram ko'chasi, 3A",
        "image": "/assets/schools/image-7.png"
      }
    ]

}
