import { Component } from '@angular/core';
import { Articulos } from './interfaces/articulos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'act5_RH'; este es el título que siempre me escribe al iniciar el proyecto, lo comento igual que su componente en .spec.ts para evitar futuros errores.

  //Se declaran los artículos
  articulos: Articulos[] = [];
  //Se inicializan los artículos fijos en el constructor
  constructor() {
    this.articulos = [
      {
        title: "El Monte do Gozo",
        story: "El Monte do Gozo, ubicado en la hermosa región de Galicia, cerca de la ciudad de A Coruña, es un lugar de gran interés turístico y espiritual. Este lugar sagrado ha ganado reconocimiento y popularidad debido a su importancia histórica y su conexión con el famoso Camino de Santiago.",
        date: "08/07/2023",
        img: "https://www.alberguescaminosantiago.com/wp-content/uploads/2018/03/Albergue_Xunta_de_Galicia_Monte_do_Gozo_06.jpg"
      },
      {
        title: "La Torre de Hércules",
        story: "La Torre de Hércules es un antiguo faro romano y uno de los principales símbolos de la ciudad de A Coruña, en Galicia, España. Se cree que es el faro en funcionamiento más antiguo del mundo y ha sido declarado Patrimonio de la Humanidad por la UNESCO.",
        date: "08/07/2023",
        img: "https://galiciaturismorural.es/views/layouts/plantilla/img/recursos/1/torre-de-hercules-NXG1sO.jpg"
      }
    ];
  };
  
}
