
// * 1
// const numbers = [4, 5, 6, 7, 8, 9, 10];
// function elevados(numbers) {
//     const  numerosElevados  = numbers.map((num) => num ** 2);
//     return numerosElevados;
// }


// * 2
// const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
// const foodSentences = foodList.map((food) => {
//   if (food === "Pizza") {
//     return `Como soy de Italia, amo comer ${foodList[0]}`;
//   } else if (food === "Ramen") {
//     return "Como soy de Japón, amo comer Ramen";
//   } else if (food === "Paella") {
//     return "Como soy de Valencia, amo comer Paella";
//   } else if (food === "Entrecot") {
//     return "Aunque no como carne, el Entrecot es sabroso";
//   } else {
//     return "";
//   }
// });
// console.log (foodSentences);

// * 3
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const odds = numbers.filter((numbers) => numbers % 2 !==0) ;
// console.log(odds);

// *4
// const staff = [
//     {
//       name: 'Pepe',
//       role: 'The Boss',
//       hobbies: ['leer', 'ver pelis']
//     },
//     {
//       name: 'Ana',
//       role: 'becaria',
//       hobbies: ['nadar', 'bailar']
//     },
//     {
//       name: 'Luis',
//       role: 'programador',
//       hobbies: ['dormir', 'comprar']
//     },
//     {
//       name: 'Carlos',
//       role: 'secretario',
//       hobbies: ['futbol', 'queso']
//     }
//   ];
  
//   const staffPhrases = staff.filter(()=> true).map(person => {
//     return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(" y ")}`;
// });
// console.log(staffPhrases);


// *5
// const inventory = [
//     {
//       name: 'Mobile phone',
//       price: 199
//     },
//     {
//       name: 'TV Samsung',
//       price: 459
//     },
//     {
//       name: 'Viaje a cancún',
//       price: 600
//     },
//     {
//       name: 'Mascarilla',
//       price: 1
//     }
//   ];

// const items = inventory.filter(item => item.price > 300).map(item => item.name);
// console.log(items);

// * 6
// const numeros = [39, 2, 4, 25, 62];
// const multi = numeros.reduce((a, b)=> a * b);
// console.log(multi);

// * 7
// const sentenceElements = [
//     'Me',
//     'llamo',
//     'Jorge',
//     'y',
//     'quiero',
//     'sentir',
//     'la',
//     'fuerza',
//     'con',
//     'javascript'
//   ];

//   const finalSentence = sentenceElements.reduce((concatenador, words)=>{
//     return concatenador + ' ' +  words + ' ';  
//   })
//   console.log(finalSentence)


// *8
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  const totalAmount = totalPrice.filter(item => item.category == 'code').reduce((a, b)=> a + b);
  
