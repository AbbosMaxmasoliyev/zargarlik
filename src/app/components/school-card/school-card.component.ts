import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-school-card',
  imports: [MatIconModule],
  templateUrl: './school-card.component.html',
  styleUrl: './school-card.component.scss'
})
export class SchoolCardComponent {
  name = input<string>("")
  adress = input<string>("")
  image = input<string>("")


  
}
