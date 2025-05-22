import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-news-card',
  imports: [MatIconModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  name = input<string>("")
  image = input<string>("")
  description = input<string>("")
  date = input<string>("")
  views = input<number>(0)
}
