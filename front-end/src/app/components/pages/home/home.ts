import { BodyComponent } from "../../snippets/body/body";
import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [BodyComponent],
    templateUrl: './home.html'
})

export class HomeComponent {}