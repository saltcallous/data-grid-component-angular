import { Component, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, PipeTransform, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { StatusColorPipe } from 'src/app/status-color.pipe';

@Component({
  selector: 'app-tag-creator',
  template: `<div [innerHTML]="innerHTML"></div>`
})
export class TagCreatorComponent implements OnInit {
  @Input() tagName: string = '';
  @Input() tagContent: string = '';
  // @Input() statusColorPipe: PipeTransform | undefined;
  innerHTML: any;
  addClass: string = 'bg-gray-100 '
  

  constructor(private sanitizer: DomSanitizer, private statusColorPipe: StatusColorPipe) {}


  ngOnInit(): void {
    // this.addClass = this.statusColorPipe ? this.statusColorPipe.transform(this.tagContent) : this.tagContent;
    this.addClass = this.statusColorPipe.transform(this.tagContent);
    this.innerHTML = this.sanitizer
      .bypassSecurityTrustHtml(`<${this.tagName} class="${this.addClass}">${this.tagContent}</${this.tagName}`)
  }
}
