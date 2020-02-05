import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @Input() appHello: string;
  @Input() colorFondo: string;
  @Input() colorTexto: string;


  constructor(private element: ElementRef) {
    console.trace('Entramos en constructor HelloDirective')

  }//constructor

  @HostListener('mouseenter')
  publiconMouseEnter() {
    console.trace('mouseEnter');

    //Accedo al elemento, y le pongo el color de fondo que mando
    this.element.nativeElement.style.backgroundColor = this.colorFondo;

    //Accedo al elemento y le pongo el texto del color que mande

    this.element.nativeElement.style.color = this.colorTexto;
  }//@HostListener

  @HostListener('mouseleave')
  publiconMouseLeave() {
    console.trace('mouseLeave');
    //Accedo al elemento y le pongo el fondo verde
    this.element.nativeElement.style.backgroundColor = this.appHello;
    this.element.nativeElement.style.color = "white";
  }//@HostListener


}//HelloDirective
