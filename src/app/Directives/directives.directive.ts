import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[setBack]'
})
export class setBack implements OnInit{
  constructor(private element: ElementRef) {
   }

   ngOnInit(): void {
     this.element.nativeElement.style.backgroundColor = 'red'
   }

}
