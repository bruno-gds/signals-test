import {Component, computed, signal, Signal} from '@angular/core';

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

  contador: Signal<number> = signal(0);

  constructor(protected readonly contadorService: ContadorService) {
    this.contador = computed(() => {
      console.log("BodyComponent......");
      return contadorService.valorAtualContadorSignal()
    })
  }
}
