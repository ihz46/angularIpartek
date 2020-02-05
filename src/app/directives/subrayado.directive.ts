import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  @Input() appSubrayado: string; //color subrayado

  colorSeleccionado: string = 'blue';

  constructor(private element: ElementRef) {
    console.debug('Constructor SubrayadoDirective')
    this.colorSeleccionado = 'blue';
  }//constructor

  @HostListener('mouseenter')
  publiconMouseEnter() {
    console.trace('mouseEnter');

    this.element.nativeElement.style.textDecoration = 'underline';
    this.element.nativeElement.style.textDecorationColor = this.appSubrayado;


  }//@HostListener

  @HostListener('mouseleave')
  publiconMouseLeave() {
    console.trace('mouseLeave');

    //Quito el subrayado al levantar el ratón
    this.element.nativeElement.style = 'text-decoration:none';
  }//@HostListener

}//subrayadoDirective
