import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('click') onClicks(){
    this.mostUpvote('line-through')
  }

  private mostUpvote(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }
}
