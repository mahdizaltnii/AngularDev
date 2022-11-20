import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/emploi';

@Component({
  selector: 'app-offre-demploi',
  templateUrl: './offre-demploi.component.html',
  styleUrls: ['./offre-demploi.component.css']
})
export class OffreDemploiComponent implements OnInit {
  emplois: Emploi[] = [];
  nbemplois!:number;
  searchText!:string;
   constructor() {
  }

  ngOnInit(): void {
     this.emplois = [
      {reference: '1', titre: 'Web developer', entreprise: 'AxeFinance', etat: true}, {
        reference: '1',
        titre: 'Software developer',
        entreprise: 'AxeFinance',
        etat: false
      },
      {reference: '1', titre: 'Devops engineer ', entreprise: 'AxeFinance', etat: true}, {
        reference: '1',
        titre: 'Graphic Designer',
        entreprise: 'AxeFinance',
        etat: false
      }
    ]

   }

   bilan()
  {
    this.nbemplois=0;
    for(let i=0;i<this.emplois.length;i++)
    {
      if (this.emplois[i].etat==true)
        this.nbemplois++
    }
   }
  search(){
    this.emplois=this.emplois.filter((x)=>(x.titre.match(this.searchText)))
  }

}
