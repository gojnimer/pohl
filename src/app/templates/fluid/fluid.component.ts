import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fluid',
  templateUrl: './fluid.component.html',
  styleUrls: ['./fluid.component.css']
})
export class FluidComponent implements OnInit,OnDestroy {
  classe = '';
  gallery:any[] = [
    {
      sourceTn:'assets/img/tm-img-01-tn.jpg',
      source:'assets/img/tm-img-01.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-02-tn.jpg',
      source:'assets/img/tm-img-02.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-03-tn.jpg',
      source:'assets/img/tm-img-03.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-04-tn.jpg',
      source:'assets/img/tm-img-04.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-05-tn.jpg',
      source:'assets/img/tm-img-05.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-06-tn.jpg',
      source:'assets/img/tm-img-06.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-07-tn.jpg',
      source:'assets/img/tm-img-07.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-08-tn.jpg',
      source:'assets/img/tm-img-08.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-09-tn.jpg',
      source:'assets/img/tm-img-09.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-10-tn.jpg',
      source:'assets/img/tm-img-10.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-11-tn.jpg',
      source:'assets/img/tm-img-11.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-12-tn.jpg',
      source:'assets/img/tm-img-12.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-13-tn.jpg',
      source:'assets/img/tm-img-13.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-14-tn.jpg',
      source:'assets/img/tm-img-14.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-15-tn.jpg',
      source:'assets/img/tm-img-15.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    },
    {
      sourceTn:'assets/img/tm-img-16-tn.jpg',
      source:'assets/img/tm-img-16.jpg',
      title:'Imagem',
      description:'Lorem ipsum dorem'

    }

    
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
    let e = history.state;
    console.log(e);
    if(e?.reload){
      window.location.reload();
    }
    this.gallery = [...this.gallery,...this.gallery,...this.gallery,...this.gallery]
    setTimeout(() => this.classe = 'selected',100);

  }

  ngOnDestroy(){
    this.classe = '';
  }

}
