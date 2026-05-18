import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './componentssnippetsheader.html',
  styleUrls: ['./componentssnippetsheader.css'],
})
export class HeaderComponent {
  isSearchHidden = true;
  
  toggleSearch() {
    this.isSearchHidden = !this.isSearchHidden;
  }
}
