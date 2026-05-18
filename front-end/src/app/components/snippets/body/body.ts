import { Component } from "@angular/core";
import { Property } from "../../../shared/models/property";
import properties from "../../../shared/db/properties.json";

@Component({
  selector: "app-body",
  templateUrl: "./body.html",
  styleUrls: ["./body.css"]
})
export class BodyComponent {
  items: Property[] = properties as Property[];
}