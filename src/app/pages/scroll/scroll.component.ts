import {
  Component,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { IScrollElement } from '../../models/scroll-element';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss',
})
export class ScrollComponent implements OnInit {
  scrollService: ScrollService = inject(ScrollService);
  elements: IScrollElement[] = [];
  targetId: number | null = null;
  displayedColumns: string[] = ['id', 'text'];

  @ViewChildren('elementRef', { read: ElementRef })
  elementRefs!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.elements = this.scrollService.getAllElements();
  }

  scrollToElement(): void {
    this.elementRefs.toArray()[24].nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrollToTypedElement(): void {
    if (!this.elementExists()) {
      return;
    }

    this.elementRefs
      .toArray()
      [this.targetId! - 1].nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }

  private elementExists(): boolean {
    if (this.targetId === null) {
      return false;
    }
    if (this.targetId <= 0) {
      return false;
    }
    if (this.targetId > this.elements.length) {
      return false;
    }

    return true;
  }
}
