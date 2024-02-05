import { Component } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pawelczu-pics',
  standalone: true,
  imports: [MatGridList, MatGridTile, CommonModule],
  templateUrl: './pawelczu-pics.component.html',
  styleUrl: './pawelczu-pics.component.css'
})
export class PawelczuPicsComponent {

  @Input() pawelczuName = '';
  @Input() pawelczuCountry = '';

  /*
  getStyling() {
      return { 'display': 'flex'};
  }  
  */ 
}


