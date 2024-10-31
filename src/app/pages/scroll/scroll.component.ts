import { Component, inject, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { IScrollElement } from '../../models/scroll-element';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss',
})
export class ScrollComponent implements OnInit {
  scrollService: ScrollService = inject(ScrollService);
  elements: IScrollElement[] = [];
  targetIndex: number | null = null;

  ngOnInit(): void {
    this.elements = this.scrollService.getAllElements();
  }

  scrollToElement(index: number): void {
    const element = document.getElementById(`${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTypedElement(): void {
    if (this.elementExists()) {
      const element = document.getElementById(`${this.targetIndex}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  private elementExists(): boolean {
    if (this.targetIndex === null) {
      return false;
    }
    if (this.targetIndex <= 0) {
      return false;
    }
    if (this.targetIndex > this.elements.length) {
      return false;
    }

    return true;
  }
}
