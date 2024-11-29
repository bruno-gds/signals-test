import {Component, computed} from '@angular/core';

import {ContadorService} from "../../service/contador.service";


@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {

  contador = computed(() => {
    console.log("Signal ChildrenComponent - atualizando......");
    return this.contadorService.valorAtualContadorSignal()
  });

  constructor(protected readonly contadorService: ContadorService) {
    console.log("Iniciando ChildrenComponent......");
  }
}
