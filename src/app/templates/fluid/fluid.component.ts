import { TemplateService } from './../template.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fluid',
  templateUrl: './fluid.component.html',
  styleUrls: ['./fluid.component.css']
})
export class FluidComponent implements OnInit, OnDestroy {
  classe = '';
  gallery: any[];

  constructor(private router: Router, private ts: TemplateService) { }


 
  ngOnInit(): void {
    let e = history.state;
    console.log(e);
    if (e?.reload) {
      window.location.reload();
    }
    this.ts.getImageList().subscribe((e: any) => {
      this.gallery = e;
      setTimeout(() => this.classe = 'selected', 100);
    }, error => console.log('error', error))





  }
  

  ngOnDestroy() {
    this.classe = '';
  }

}
