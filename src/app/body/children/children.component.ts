import {Component} from '@angular/core';

import {ContadorService} from "../../service/contador.service";


@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {

  constructor(protected readonly contadorService: ContadorService) {}
}
