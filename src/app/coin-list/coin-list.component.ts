import { ApiService } from './../servico/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  bannerData: any = [];
  constructor(private servico: ApiService) { }

  ngOnInit(): void {
    this.getBannerData();
    this.getAllData();
  }

  getBannerData(){
    this.servico.getTrendingCurrency("INR").subscribe(resultado => {
      console.log(resultado);
      this.bannerData = resultado;
    });
  }

  getAllData(){
    this.servico.getCurrency("INR").subscribe(resultado => {
      console.log(resultado);
    })
  }

}
