// let colores = ['rojo', 'azul'];
// let nuevaLongitud = colores.push('verde', 'amarillo');
// console.log(colores); // ['rojo', 'azul', 'verde', 'amarillo']
// console.log(nuevaLongitud); // 4

// ejemplo 1

// let nombres = ['Mariana', 'Mateo'];
// let nuevaLongitud = nombres.push('Brayan', 'Jhon');
// console.log(nombres); 
// console.log(nuevaLongitud);

/////////////////////////////////////////////////////////

// let colores = ['rojo', 'azul', 'verde'];
// let eliminado = colores.pop();
// console.log(eliminado); // 'verde'
// console.log(colores); // ['rojo', 'azul']

// ejemplo 2 

// Elimina el ultimo
// let nombres = ['Mariana', 'Jhon', 'Mateo', 'Brayan'];
// let eliminado = nombres.pop();
// console.log(eliminado);
// console.log(nombres);

// Elimina el Primero
// let colores = ['rojo', 'azul', 'verde'];
// let eliminado = colores.shift();
// console.log(eliminado); // 'rojo'
// console.log(colores); // ['azul', 'verde']

// Agrega al inicio
// let colores = ['azul', 'verde'];
// let nuevaLongitud = colores.unshift('rojo', 'blanco');
// console.log(colores); // ['rojo', 'blanco', 'azul', 'verde']
// console.log(nuevaLongitud); // 4

/////////////////////////////////////////////////////////

// let numeros = [1, 2, 3, 4, 5];
// let subArreglo = numeros.slice(1, 4);
// console.log(subArreglo); // [2, 3, 4]
// console.log(numeros); // [1, 2, 3, 4, 5] (sin cambios)
// console.log(numeros.slice(-3)); // [4, 5]

// ejemplo 3

// let Pares = [2, 4, 6, 8, 10];
// let subArreglo = Pares.slice(2,4);
// console.log(subArreglo);
// console.log(Pares);
// console.log(Pares.slice(-3));

/////////////////////////////////////////////////

// let frutas = ['manzana', 'banana', 'naranja', 'Fresa'];
// frutas.forEach((elemento, indice) => {
//   console.log(`Índice ${indice}: ${elemento}`);
// });

// ejemplo 4

// let Nombres =['Mariana', 'Jhon', 'Mateo', 'Brayan'];
// Nombres.forEach((elementos, indice) => {
//     console.log(`indice ${indice}: ${elementos}`);
// });

////////////////////////////////////////////////////////////////////

// let numeros = [1, 2, 3, 4];
// let duplicados = numeros.map(num => num * 2);
// console.log(duplicados); // [2, 4, 6, 8]
// console.log(numeros); // [1, 2, 3, 4] (sin cambios)

// ejemplo 5

// let numeros = [5, 10, 7, 8];
// let duplicados = numeros.map(num => num *2);
// console.log(duplicados);
// console.log(numeros);


// ACTIVIDAD 

let especialistas = [
   { nombre: "Mariana Bastidas Quintero", rol: "Estratega" },
   { nombre: "Brayan Stiven Mejia Vanegas", rol: "Redactor"},
   { nombre: "Mateo Usuga Alvarez", rol: "Diseñador Grafico"},
] 
let nuevaLongitud = especialistas.push({nombre: "Jhon Alexander Lenis Holguin", rol: "Analista De Datos"})
console.log(especialistas);
console.log(nuevaLongitud);

let Especialistas = [
   { nombre: "Mariana Bastidas Quintero", rol: "Estratega" },
   { nombre: "Brayan Stiven Mejia Vanegas", rol: "Redactor"},
   { nombre: "Mateo Usuga Alvarez", rol: "Diseñador Grafico"},
   { nombre: "Jhon Alexander Lenis Holguin", rol: "Analista De Datos"}
] 
let Eliminado = Especialistas.pop();
console.log(Eliminado);
console.log(Especialistas);

let ESpecialistas = [
   { nombre: "Mariana Bastidas Quintero", rol: "Estratega" },
   { nombre: "Brayan Stiven Mejia Vanegas", rol: "Redactor"},
   { nombre: "Mateo Usuga Alvarez", rol: "Diseñador Grafico"},
] 
let NuevaLongitud = ESpecialistas.unshift({nombre: "Juan Jose Giraldo Monsalve", rol: "Community Manager"});
console.log(ESpecialistas);
console.log(NuevaLongitud);

let ESPecialistas = [
   { nombre: "Juan Jose Giraldo Monsalve", rol: "Community Manager"},
   { nombre: "Mariana Bastidas Quintero", rol: "Estratega" },
   { nombre: "Brayan Stiven Mejia Vanegas", rol: "Redactor"},
   { nombre: "Mateo Usuga Alvarez", rol: "Diseñador Grafico"},
] 
let eliminado = ESPecialistas.shift();
console.log(eliminado);
console.log(ESPecialistas);

let ESPEcialistas = [
   { nombre: "Mariana Bastidas Quintero", rol: "Estratega" },
   { nombre: "Brayan Stiven Mejia Vanegas", rol: "Redactor"},
   { nombre: "Mateo Usuga Alvarez", rol: "Diseñador Grafico"},
] 
let sublista = ESPEcialistas.slice (0, 2);
console.log(sublista);
console.log(ESPEcialistas);

let Campanas = [
  [
    { nombre: "Sofía Ramírez", rol: "Estratega" },
    { nombre: "Diego Vargas", rol: "Redactor" }
  ],
  [
    { nombre: "Clara Morales", rol: "Diseñadora Gráfica" },
    { nombre: "Lucía Fernández", rol: "Analista de Datos" }
  ]
];
 console.log('campana 1');
let campanas = ['"Sofia Ramirez", rol: "Estratega"', '"Diego Vargas", rol: "Redactor"'];
campanas.forEach((elemento, indice) => {
  console.log(`Índice ${indice}: ${elemento}`);
})

console.log('campana 1');
let CAmpanas = ['2 Especialistas']

for (let CAMpana of CAmpanas){
    console.log(CAmpanas);
}
console.log('campana 2');
let CAMpanas = ['2 Especialistas']

for (let CAMpana of CAMpanas){
    console.log(CAMpanas);
}

let ESPECialistas = [
   { nombre: "Sofia Ramirez", rol: "Estratega" },
   { nombre: "Diego Vargas", rol: "Redactor"},
   { nombre: "Clara Morales", rol: "Diseñadora Grafica"},
   { nombre: "Lucia Fernandez", rol: "Analista de Datos"}
]
ESPECialistas.forEach(especialista => {
    especialista.nombre = especialista.nombre.toUpperCase();
});
console.log(ESPECialistas);