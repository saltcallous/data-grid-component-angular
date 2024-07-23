import { Component, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, PipeTransform, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tag-creator',
  template: `<div [innerHTML]="innerHTML"></div>`
})
export class TagCreatorComponent implements OnInit {
  @Input() tagName: string = '';
  @Input() tagContent: string = '';
  @Input() statusColorPipe: PipeTransform | undefined;
  innerHTML: any;
  addClass: string = 'bg-gray-100 '
  

  constructor(private el: ElementRef, private renderer: Renderer2, private sanitizer: DomSanitizer) {}


  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['tagName'] || changes['tagContent'] || changes['statusColorPipe']) {
  //     this.createTag();
  //   }
  // }

  ngOnInit(): void {
    this.addClass = this.statusColorPipe ? this.statusColorPipe.transform(this.tagContent) : this.tagContent;
    this.innerHTML = this.sanitizer
      .bypassSecurityTrustHtml(`<${this.tagName} class="${this.addClass}">${this.tagContent}</${this.tagName}`)
  }

  private createTag() {

    const element = this.el.nativeElement;
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    if (this.tagName) {
      const newTag = this.renderer.createElement(this.tagName);
      
      const text = this.renderer.createText(this.tagContent);

      
      this.renderer.appendChild(newTag, text);
      this.renderer.appendChild(element, newTag);
      // this.renderer.addClass(newTag, addClass)
    }
  }
}
