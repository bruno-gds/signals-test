import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private readonly contadorSignal = signal(0);
  private readonly contadorBehaviorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  valorAtualContadorSignal() {
    return this.contadorSignal();
  }

  adicionarNoContadorSignal() {
    console.log('adicionando mais 1 no contador Signal da Service.....');
    this.contadorSignal.update(value => value + 1);
    console.log('valor atual: ' + this.contadorSignal());
  }

  valorAtualContadorBehavior() {
    return this.contadorBehaviorSubject.asObservable();
  }

  adicionarNoContadorBehavior() {
    console.log('adicionando mais 1 no contador Behavior da Service.....');
    this.contadorBehaviorSubject.next(this.contadorBehaviorSubject.value + 1);
    console.log('valor atual: ' + this.contadorBehaviorSubject.value);
  }
}
