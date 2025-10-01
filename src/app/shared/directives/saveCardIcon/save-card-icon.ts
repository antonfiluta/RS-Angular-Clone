import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChanges,
  inject,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appSaveCardIcon]',
})
export class AppSaveCardIconDirective implements OnChanges, OnInit {
  @Input('appSaveCardIcon') isLiked = false;

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  private heartIconClass = 'pi-heart';
  private heartFillIconClass = 'pi-heart-fill';

  private updateIcon(): void {
    this.renderer.removeClass(this.el.nativeElement, this.heartIconClass);
    this.renderer.removeClass(this.el.nativeElement, this.heartFillIconClass);

    if (this.isLiked) {
      this.renderer.addClass(this.el.nativeElement, this.heartFillIconClass);
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.addClass(this.el.nativeElement, this.heartIconClass);
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLiked']) {
      this.updateIcon();
    }
  }

  ngOnInit(): void {
    this.updateIcon();
  }
}
