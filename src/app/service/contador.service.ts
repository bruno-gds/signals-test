import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private readonly contadorSignal = signal(0);

  valorAtualContadorSignal() {
    return this.contadorSignal();
  }

  adicionarNoContadorSignal() {
    this.contadorSignal.update(value => value + 1);
  }
}
