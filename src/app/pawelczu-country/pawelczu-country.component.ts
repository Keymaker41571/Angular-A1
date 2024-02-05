import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pawelczu-country',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './pawelczu-country.component.html',
  styleUrl: './pawelczu-country.component.css'
})
export class PawelczuCountryComponent {

  @Input() pawelczuCity = '';
  @Input() pawelczuAverageSalary = '';
  @Input() pawelczuCountry = '';

}


