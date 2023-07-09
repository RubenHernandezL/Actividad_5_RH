import { Component, Input } from '@angular/core';
import { Articulos } from 'src/app/interfaces/articulos.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  //Se genera el input del array del padre al hijo con las 2 noticias iniciales
  @Input() misArticulos: Articulos[] = [];
  //Se crea un nuevo objeto que contendrá lo que se capture de los form
  newArticle: Articulos = { title: "", date: "", story: "", img: "" };
  //Se crea cargarArtículos para pintarlos en el HTM del componente blog
  cargarArticulos(): string {
    let listArticulos = ""
    this.misArticulos.forEach((elemento) => {
      listArticulos += `<article class = "w-Elementos">
                          <h3>${elemento.title}</h3>
                          <div>${elemento.date}</div>
                          <p>${elemento.story}</p>
                          <img src="${elemento.img}" alt="${elemento.title}">
                        </article>`
    });
    return listArticulos;
  };
// Lo utilizamos para pintar los nuevos artículos y hacer un push en el array de artículos
  getDataForm(): void {
    if (this.newArticle.title !== "" && this.newArticle.title !== " " && this.newArticle.date !== "" && this.newArticle.date !== " " && this.newArticle.story !== "" && this.newArticle.story !== " " && this.newArticle.img !== "" && this.newArticle.img !== " ") {
      const isDuplicate = this.misArticulos.find(
        (elemento) =>
          elemento.title === this.newArticle.title || elemento.img === this.newArticle.img
      );
      //Restricción por si los datos se encuentran duplicados (solo tomamos en cuenta el Título y URL de las imágenes, ya que las fechas y el cuerpo pueden ser coincidentes)
      if (!isDuplicate) {
        const dateParts = this.newArticle.date.split('-');
        const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
        this.newArticle.date = formattedDate;
        this.misArticulos.push(this.newArticle);
        this.newArticle = { title: "", date: "", story: "", img: "" };
      } else {
        alert("No se pueden ingresar ni Títulos ni URLs de imágenes repetidas. En un blog de noticias, es importante evitar la repetición de elementos clave para mantener la integridad y calidad de los contenidos");
      }
    } else {
      alert("No se pueden publicar en el blog noticias que posean campos vacíos. Verifica que todos los campos se encuentren debidamente cumplimentados.");
    }
  }
  //Función para el atributo max del input tipo date, para que no se puedan publicar noticias a fechas posteriores al día actual. La primera es para al panel de fechas del navegador.
  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  //estas otras 2 para validar si la fecha es igual o inferior a fecha actual
  onDateInputChange(event: any): void {
    const inputDate = new Date(event.target.value);
    const currentDate = new Date();
  
    if (inputDate > currentDate) {
      event.target.value = this.formatDate(currentDate);
    }
  }
  //Formato de la fecha
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
}
