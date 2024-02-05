import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pawelczu-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pawelczu-about.component.html',
  styleUrl: './pawelczu-about.component.css'
})
export class PawelczuAboutComponent {
    
    @Input() pawelczuName = '';
    @Input() pawelczuEmail = '';
    @Input() pawelczuCampus = '';

    
}
