import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, Input, input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {
  @Input() itemWidth = 90;
  @Input() btnShow: boolean = true;
  @Output() onNext = new EventEmitter<number>();
  @Output() onPrev = new EventEmitter<number>();
  @Output() onScrollTo = new EventEmitter<number>();

  @ViewChild('track', { static: false }) trackRef!: ElementRef;

  currentIndex = 0;

  ngAfterViewInit() {
    this.scrollTo(0);
  }

  scrollTo(index: number) {
    const track = this.trackRef.nativeElement as HTMLElement;
    const scrollAmount = (track.offsetWidth * (this.itemWidth / 100)) * index;
    track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    this.currentIndex = index;
    this.onScrollTo.emit(this.currentIndex);
  }

  next() {
    console.log(this.btnShow)
    if (this.trackRef) {
      const maxIndex = this.trackRef.nativeElement.children.length - 1;
      if (this.currentIndex < maxIndex) {
        this.scrollTo(this.currentIndex + 1);
        this.onNext.emit(this.currentIndex);
      }
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.scrollTo(this.currentIndex - 1);
      this.onPrev.emit(this.currentIndex);
    }
  }
}
