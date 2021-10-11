import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private element: ElementRef) { }
  @Input() fontWeight?: string;
  @Input() borderColor?: string;

  @HostListener('mouseenter') onMouseEnter(button) {
    this.mouseEnterEffect(this.borderColor, this.fontWeight);
  }

  @HostListener('mouseleave') onMouseLeave(button) {
    this.mouseLeaveEffect(this.borderColor, this.fontWeight);
  }
  //mouse Enter
  private mouseEnterEffect(color, fontWeight) {
    if (color) {
      this.element.nativeElement.style.borderBottom = `5px solid ${color}`;
    }
    if (fontWeight) {
      this.element.nativeElement.style.fontWeight = fontWeight;
    }
  }
//mouse leave
  private mouseLeaveEffect(color, fontWeight) {
    if (color) {
      this.element.nativeElement.style.borderBottom = '';
    }
    if (fontWeight) {
      this.element.nativeElement.style.fontWeight = 'normal';
    }
  }

}
