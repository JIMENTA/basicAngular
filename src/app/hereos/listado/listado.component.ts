import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

 hereos: string[] =['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];

 hereoBorrado:string = '';

 borrarHereo(){

 this.hereoBorrado = this.hereos.shift() || '';
 }

}
