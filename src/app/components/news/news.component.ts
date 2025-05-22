import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NewsCardComponent } from '../news-card/news-card.component';
import { CarouselComponent } from "../../shared/carousel/carousel/carousel.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-news',
  imports: [CommonModule, NewsCardComponent, CarouselComponent, MatIconModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  @ViewChild('newsCarousel') newsCarousel!: any;

  goNewsPrev() {
    this.newsCarousel?.prev();
  }

  goNewsNext() {
    this.newsCarousel?.next();
  }
  newsData:
    {
      "nomi": string,
      "image": string,
      "sana": string,
      "description": string,
      "views": number
    }[]
    = [
      {
        "nomi": "Raqobat qo‘mitasi litsenziyasiz turfirmalar faoliyatini reklama qilish taqiqlanganini eslatdi",
        "image": "/assets/news/image.jpg",
        "sana": "12.03.2025",
        "views": 748,
        "description": `Raqobat qo‘mitasi «noto‘g‘ri, ishonchsiz va shubhali reklamalar kuzatilsa yoki bundan zarar ko‘rganlar bo‘lsa» murojaat qilishi mumkinligini bildirdi. Qo‘mitaning ma’lum qilishicha, «umrachi» turfirmalar orasida “Panorama Airways” va “Gulbakhor Airways" fuqarolarga eng ko‘p – 25 mlrd so‘m zarar yetkazgan.`,
      },
      {
        "nomi": "Raqobat qo‘mitasi litsenziyasiz turfirmalar faoliyatini reklama qilish taqiqlanganini eslatdi",
        "image": "/assets/news/image-1.jpg",
        "sana": "12.03.2025",
        "views": 748,
        "description": `Raqobat qo‘mitasi «noto‘g‘ri, ishonchsiz va shubhali reklamalar kuzatilsa yoki bundan zarar ko‘rganlar bo‘lsa» murojaat qilishi mumkinligini bildirdi. Qo‘mitaning ma’lum qilishicha, «umrachi» turfirmalar orasida “Panorama Airways” va “Gulbakhor Airways" fuqarolarga eng ko‘p – 25 mlrd so‘m zarar yetkazgan.`,
      },
      {
        "nomi": "Raqobat qo‘mitasi litsenziyasiz turfirmalar faoliyatini reklama qilish taqiqlanganini eslatdi",
        "image": "/assets/news/image-2.jpg",
        "sana": "12.03.2025",
        "views": 748,
        "description": `Raqobat qo‘mitasi «noto‘g‘ri, ishonchsiz va shubhali reklamalar kuzatilsa yoki bundan zarar ko‘rganlar bo‘lsa» murojaat qilishi mumkinligini bildirdi. Qo‘mitaning ma’lum qilishicha, «umrachi» turfirmalar orasida “Panorama Airways” va “Gulbakhor Airways" fuqarolarga eng ko‘p – 25 mlrd so‘m zarar yetkazgan.`,
      },
      {
        "nomi": "Raqobat qo‘mitasi litsenziyasiz turfirmalar faoliyatini reklama qilish taqiqlanganini eslatdi",
        "image": "/assets/news/image-3.jpg",
        "sana": "12.03.2025",
        "views": 748,
        "description": `Raqobat qo‘mitasi «noto‘g‘ri, ishonchsiz va shubhali reklamalar kuzatilsa yoki bundan zarar ko‘rganlar bo‘lsa» murojaat qilishi mumkinligini bildirdi. Qo‘mitaning ma’lum qilishicha, «umrachi» turfirmalar orasida “Panorama Airways” va “Gulbakhor Airways" fuqarolarga eng ko‘p – 25 mlrd so‘m zarar yetkazgan.`,
      },
      {
        "nomi": "Raqobat qo‘mitasi litsenziyasiz turfirmalar faoliyatini reklama qilish taqiqlanganini eslatdi",
        "image": "/assets/news/image-4.jpg",
        "sana": "12.03.2025",
        "views": 748,
        "description": `Raqobat qo‘mitasi «noto‘g‘ri, ishonchsiz va shubhali reklamalar kuzatilsa yoki bundan zarar ko‘rganlar bo‘lsa» murojaat qilishi mumkinligini bildirdi. Qo‘mitaning ma’lum qilishicha, «umrachi» turfirmalar orasida “Panorama Airways” va “Gulbakhor Airways" fuqarolarga eng ko‘p – 25 mlrd so‘m zarar yetkazgan.`,
      },
      {
        "nomi": "Raqobat qo‘mitasi litsenziyasiz turfirmalar faoliyatini reklama qilish taqiqlanganini eslatdi",
        "image": "/assets/news/image-5.jpg",
        "sana": "12.03.2025",
        "views": 748,
        "description": `Raqobat qo‘mitasi «noto‘g‘ri, ishonchsiz va shubhali reklamalar kuzatilsa yoki bundan zarar ko‘rganlar bo‘lsa» murojaat qilishi mumkinligini bildirdi. Qo‘mitaning ma’lum qilishicha, «umrachi» turfirmalar orasida “Panorama Airways” va “Gulbakhor Airways" fuqarolarga eng ko‘p – 25 mlrd so‘m zarar yetkazgan.`,
      }
    ]
}
