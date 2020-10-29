import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor() { }

  classe = ''

  ngOnInit(): void {

    this.classe = 'selected';
  }

  ngOnDestroy(){
    this.classe = '';
  }

}
