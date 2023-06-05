import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img',
})
export class LazyloadDirective {
  constructor({nativeElement}: ElementRef<HTMLImageElement>) {
    const support = 'loading' in HTMLImageElement.prototype;

    if(support){
      nativeElement.setAttribute('loading','lazy')
    } else{
      nativeElement.removeAttribute('loading');
    }
  }
}
