import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from '@angular/forms';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CoinDetailComponent
  ],
  imports: [
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
