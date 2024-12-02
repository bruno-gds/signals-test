import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private readonly contadorSignal = signal(0);

  valorAtualContadorSignal() {
    console.log('valorAtualContadorSignal X');
    return this.contadorSignal();
  }

  adicionarNoContadorSignal() {
    this.contadorSignal.update(value => value + 1);
  }
}
