import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private readonly contadorSignal = signal(0);

  valorAtualContadorSignal() {
    console.log('acionou get');
    return this.contadorSignal()
  }

  adicionarNoContadorSignal() {
    this.contadorSignal.set(this.contadorSignal() + 1);
  }
}
