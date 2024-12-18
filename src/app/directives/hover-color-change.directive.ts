import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverColorChange]',
  standalone: true,
})
export class HoverColorChangeDirective {
  private hoverCount = 0;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverCount++;

    this.renderer.addClass(this.element.nativeElement, 'changed');

    if (this.hoverCount > 5) {
      this.renderer.setProperty(
        this.element.nativeElement,
        'textContent',
        'more than 5'
      );
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, 'changed');
  }
}
