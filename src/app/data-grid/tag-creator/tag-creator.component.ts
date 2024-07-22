import { Component, Input, OnChanges, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tag-creator',
  template: '',
})
export class TagCreatorComponent implements OnChanges {
  @Input() tagName: string = '';
  @Input() tagContent: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tagName'] || changes['tagContent']) {
      this.createTag();
    }
  }

  private createTag() {
    // پاک کردن تگ‌های قبلی
    const element = this.el.nativeElement;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    // ایجاد تگ جدید
    if (this.tagName) {
      const newTag = this.renderer.createElement(this.tagName);
      const text = this.renderer.createText(this.tagContent);
      this.renderer.appendChild(newTag, text);
      this.renderer.appendChild(element, newTag);
    }
  }
}
