import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";

import {ContadorService} from "../../service/contador.service";


@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent implements OnDestroy {

  private readonly contadorSubject: Subscription;
  contadorModoVelho: number = 0;

  constructor(private readonly contadorService: ContadorService) {
    this.contadorSubject = this.contadorService.valorAtualContadorBehavior()
      .subscribe({
        next: value => this.contadorModoVelho = value
      })
  }



  adicionar() {
    this.contadorService.adicionarNoContadorBehavior()
  }

  ngOnDestroy() {
    this.contadorSubject.unsubscribe();
  }
}
