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

  contador: number;

  constructor(protected readonly contadorService: ContadorService) {
    console.log("Iniciando BodyComponent......");
    this.contador = this.contadorService.valorAtualContadorSignal();
  }

  incrementarContador(): void {
    this.contadorService.adicionarNoContadorSignal();
    this.contador = this.contadorService.valorAtualContadorSignal();
  }
}
