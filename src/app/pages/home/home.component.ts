import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { DataSetComponent } from "../../components/data-set/data-set.component";
import { DocumentsComponent } from "../../components/documents/documents.component";
import { SchoolsComponent } from "../../components/schools/schools.component";
import { ExhibitionComponent } from "../../components/exhibition/exhibition.component";
import { NewsComponent } from "../../components/news/news.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroComponent, DataSetComponent, DocumentsComponent, SchoolsComponent, ExhibitionComponent, NewsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
