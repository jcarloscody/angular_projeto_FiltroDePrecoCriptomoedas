import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crip';
  selectedCurrency: string = "";


  sendCurrency(event: String){
     console.log(event);
  }
}
