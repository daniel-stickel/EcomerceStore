import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNave } from "./app-nave/app-nave";
import { Cards } from "./cards/cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNave, Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EcomerceStore');
}
