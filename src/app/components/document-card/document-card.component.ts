import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-document-card',
  imports: [MatIconModule],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.scss'
})
export class DocumentCardComponent {
  title = input<string>("")
  subtitle = input<string>("")
  documentLink = input<string>("")

}
