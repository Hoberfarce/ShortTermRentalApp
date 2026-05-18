import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/snippets/header/header';
import { FooterComponent } from "./componentssnippetsfooter/componentssnipetsfooter";
import { BodyComponent } from "./components/snippets/body/body";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, BodyComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('client');
}
