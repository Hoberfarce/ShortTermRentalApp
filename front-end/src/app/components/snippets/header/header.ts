import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  isSearchHidden = true;
  
  toggleSearch() {
    this.isSearchHidden = !this.isSearchHidden;
  }
}
