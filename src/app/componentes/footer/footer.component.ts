import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  global: any;
  constructor() {
    this.global = GLOBAL;
  }

  ngOnInit() {
  }

}
