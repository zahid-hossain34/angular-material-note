import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.css'],
  host: {
    class: 'pulse',
  },
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() isLoading: boolean = true;
  width!: string;
  height!: string;
  className!: string;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    // const host = this.host.nativeElement;

    // if (this.className) {
    //   host.classList.add(this.className);
    // }

    // host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    // host.style.setProperty('--skeleton-rect-height', this.height ?? '20px');
  }
}
