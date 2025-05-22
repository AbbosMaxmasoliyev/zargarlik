import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-exhibition-card',
  imports: [MatIconModule],
  templateUrl: './exhibition-card.component.html',
  styleUrl: './exhibition-card.component.scss'
})
export class ExhibitionCardComponent {
  name = input<string>("")
  image = input<string>("")
  adress = input<string>("")
  date = input<string>("")
}
