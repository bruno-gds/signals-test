import {Component} from '@angular/core';

import {ContadorService} from "../service/contador.service";
import {ChildrenComponent} from "./children/children.component";


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ChildrenComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  constructor(protected readonly contadorService: ContadorService) {}

  adicionarSignal() {
    this.contadorService.adicionarNoContadorSignal();
  }
}
