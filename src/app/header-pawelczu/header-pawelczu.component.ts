import { Component} from '@angular/core'
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header-pawelczu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-pawelczu.component.html',
  styleUrl: './header-pawelczu.component.css'
})

export class HeaderPawelczuComponent {
    today: number = Date.now();
    @Input() pawelczuId = '';

    getStyles() {
      return {'background-color' : 'blue', 'color' : 'white', 'font-variant' : 'small-caps'};
    }
}

