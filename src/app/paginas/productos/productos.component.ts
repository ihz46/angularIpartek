import { Component, OnInit } from '@angular/core';
/*
 * Componente principal que se carga al arrancar la aplicación
 * 
 * selector: nombre de la etiqueta para inyectar el componente.
 * 
 * templateUrl: indica la ruta donde se encuentra la vista en HTML.
 * 
 * styleUrls: indica donde se encuentra el estilo para la vista en formato SCSS.
 * 
 */
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  //Variable
  title = 'Welcome to THE HELL';

  //Creamos un array con un JSON
  productos = [{
    "id": 34,
    "nombre": "café",
    "gluten": "false",
    "precio": 1.23,
    "imagen": "https://as01.epimg.net/deporteyvida/imagenes/2018/11/30/portada/1543604759_559830_1543604909_noticia_normal.jpg",
    "categoria": {
      "id": 1,
      "nombre": "bebidas"
    },
    "historico": [{
      "fecha": "01/12/2019",
      "precio": 1.50
    },
    {
      "fecha": "03/12/2019",
      "precio": 2.20
    },
    {
      "fecha": "12/12/2019",
      "precio": 2.90
    }
    ]
  },

  {
    "id": 5,
    "nombre": "aceitunas",
    "gluten": "false",
    "precio": 3.50,
    "imagen": "https://faroliva.com/450-thickbox_default/aceitunas-rellenas-de-anchoa-gigante.jpg",
    "categoria": {
      "id": 2,
      "nombre": "conservas"
    },
    "historico": [{
      "fecha": "01/12/2019",
      "precio": 5.60
    },
    {
      "fecha": "03/12/2019",
      "precio": 7.40
    },
    {
      "fecha": "12/12/2019",
      "precio": 10
    }
    ]
  },
  {
    "id": 2,
    "nombre": "pan",
    "gluten": "true",
    "precio": 1,
    "imagen": "https://www.recetasdepan.net/wp-content/uploads/2019/06/Receta-de-pan-de-masa-madre-de-San-Francisco.jpg",
    "categoria": {
      "id": 3,
      "nombre": "panaderia"
    },
    "historico": [{
      "fecha": "01/12/2019",
      "precio": 1.40
    },
    {
      "fecha": "03/12/2019",
      "precio": 2.80
    },
    {
      "fecha": "12/12/2019",
      "precio": 2.24
    }
    ]
  }
  ]

  ngOnInit() {
    console.trace('ProductosComponent ngOnInit');
  }
  pSeleccionado = this.productos[0];

  seleccionarProducto = function (producto) {
    console.log('hemos hecho click %o', producto);
    this.pSeleccionado = producto;
  }
}
