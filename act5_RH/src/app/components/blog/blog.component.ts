import { Component, Input } from '@angular/core';
import { Articulos } from 'src/app/interfaces/articulos.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() misArticulos: Articulos[] = [];

  newArticle: Articulos = { title: "", date: "", story: "", img: "" };

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
    return listArticulos
  };

  getDataForm() {
    if (this.newArticle.title !== "" && this.newArticle.title !== " " && this.newArticle.date !== "" && this.newArticle.date !== " " && this.newArticle.story !== "" && this.newArticle.story !== " " && this.newArticle.img !== "" && this.newArticle.img !== " ") {
      const isDuplicate = this.misArticulos.find(
        (elemento) =>
          elemento.title === this.newArticle.title || elemento.img === this.newArticle.img
      );
      if (!isDuplicate) {
        this.misArticulos.push(this.newArticle);
        this.newArticle = { title: "", date: "", story: "", img: "" };
      } else {
        alert("No se pueden ingresar ni Títulos ni url de imágenes repetidas. En un blog de noticias, es importante evitar la repetición de elementos clave para mantener la integridad y calidad de los contenidos");
      }
    } else {
      alert("No se pueden publicar en el blog noticias que posean campos vacíos. Verifica que todos los campos se encuentren debidamente cumplimentados.");
    }
  }
}
