import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('headerLinks', { static: false }) headerLinks!: ElementRef;
  isNavbarOpen = false;
  isMobile = false;



  toggleNavbar() {
    this.headerLinks.nativeElement.classList.toggle("show")
  }

  scrollTo(section: string) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
