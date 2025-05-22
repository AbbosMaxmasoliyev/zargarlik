import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-set',
  imports: [CommonModule,RouterLink, MatIconModule],
  templateUrl: './data-set.component.html',
  styleUrl: './data-set.component.scss'
})
export class DataSetComponent {
  data = [
    {
      image: "/assets/image.png",
      title: "Litsenziya ma’lumotlarini tekshirish",
      link: "/litsenziya-malumotlarini-tekshirish"
    },
    {
      image: "/assets/image-1.png",
      title: "Tashkilotning barqarorlik reytingini aniqlash",
      link: "/tashkilotning-barqarorlik-reytingini-aniqlash"
    },
    {
      image: "/assets/image-2.png",
      title: "Zargarlik mahsulotining ishlab chiqaruvchisini aniqlash",
      link: "/zargarlik-mahsulotining-ishlab-chiqaruvchisini-aniqlash"
    },
    {
      image: "/assets/image-3.png",
      title: "Qimmatbaho metallardan yasalgan buyumlarni ishlab chiqarish yoki sotishga litsenziya olish.",
      link: "/qimmatbaho-metallardan-yasalgan-buyumlarni-ishlab-chiqarish-yoki-sotishga-litsenziya-olish"
    },
  ]
}
