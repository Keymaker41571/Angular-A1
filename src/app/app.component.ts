import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';   // common module is used for pipes, directives, ngif, ngforof
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderPawelczuComponent } from './header-pawelczu/header-pawelczu.component';
import { PawelczuAboutComponent } from './pawelczu-about/pawelczu-about.component';
import { PawelczuCountryComponent } from './pawelczu-country/pawelczu-country.component';
import { PawelczuPicsComponent } from './pawelczu-pics/pawelczu-pics.component';
import { PawelczuPersonal } from './classPAWELCZULoginName';
import { PawelczuPoland } from './classPAWELCZULoginName';
import { MatGridTile } from '@angular/material/grid-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatTabsModule, MatTabsModule, MatIconModule, 
            FormsModule,  MatGridListModule, HeaderPawelczuComponent, PawelczuAboutComponent,
            PawelczuCountryComponent, PawelczuPicsComponent, MatGridTile ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'A1pawelczu';

  public getId: string;
  public getName: string;
  public getEmail: string;
  public getCampus: string;
  public getImage: string;

  public getCountry: string;
  public getBirthId: number;
  public getCity: string;
  public getAverageSalary: number;
  public getFlagImage: string;
  

  constructor() {
    const PERpawelczu = new PawelczuPersonal();
    const CTRYpawelczu = new PawelczuPoland();
    
    this.getId = PERpawelczu.pawelczuID;  // can i use getID or has to be PERpawelczu where i store the value 
    this.getName = PERpawelczu.pawelczuKonradPawelczuk;
    this.getEmail = PERpawelczu.pawelczuEmail;
    this.getCampus = PERpawelczu.pawelczuCampus;
    this.getImage = PERpawelczu.pawelczuImage;

    this.getCountry = CTRYpawelczu.pawelczuCountry;
    this.getBirthId = CTRYpawelczu.pawelczuBirthId;
    this.getCity = CTRYpawelczu.pawelczuCity;
    this.getAverageSalary = CTRYpawelczu.pawelczuAverageSalary;
    this.getFlagImage = CTRYpawelczu.pawelczuFlagImage;
  }                                           
}






/*
  public PERpawelczu: PawelczuPersonal = new PawelczuPersonal();

  
  PERpawelczu: PawelczuPersonal;
  CTRYpawelczu: PawelczuPoland;

  constructor() {
    this.PERpawelczu =  new PawelczuPersonal();
    this.CTRYpawelczu = new PawelczuPoland();
  }
  */