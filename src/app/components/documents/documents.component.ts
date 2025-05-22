import { Component } from '@angular/core';
import { DocumentCardComponent } from "../document-card/document-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents',
  imports: [DocumentCardComponent, CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  documentsData: {
    title: string,
    subtitle: string,
    documentLink: string
  }[] = [
      {
        title: "Huquqiy hujjat  №15",
        subtitle: "Tashkilot huquqlari haqida to’liq ma’lumot",
        documentLink: "/assets/Otajon Makxmasoliyev.pdf"
      },
      {
        title: "Huquqiy hujjat  №15",
        subtitle: "Tashkilot huquqlari haqida to’liq ma’lumot",
        documentLink: "/assets/Otajon Makxmasoliyev.pdf"
      },
      {
        title: "Huquqiy hujjat  №15",
        subtitle: "Tashkilot huquqlari haqida to’liq ma’lumot",
        documentLink: "/assets/Otajon Makxmasoliyev.pdf"
      }, {
        title: "Huquqiy hujjat  №15",
        subtitle: "Tashkilot huquqlari haqida to’liq ma’lumot",
        documentLink: "/assets/Otajon Makxmasoliyev.pdf"
      }
    ]
}
