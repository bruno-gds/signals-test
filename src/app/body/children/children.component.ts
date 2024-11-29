import {Component, computed, signal, Signal} from '@angular/core';

import {ContadorService} from "../../service/contador.service";


@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {

  contador: Signal<number> = signal(0);

  constructor(protected readonly contadorService: ContadorService) {
    this.contador = computed(() => {
      console.log("ChildrenComponent......");
      return contadorService.valorAtualContadorSignal()
    })
  }
}
