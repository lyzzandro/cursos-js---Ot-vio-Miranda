const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//continue continua para a próxima iteteração
///break sai do laço

//com for

// for (let i in numeros) {
//     let numero = numeros[i];
//     if (numero === 2) {
//         console.log('Pulei o numero 2');
//         continue;
//     }

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         break;
//     }
//     console.log(numero);
// }

//com while
// let i = 0;
// while (i < numeros.length) {
//     let numero = numeros[i];
//     if (numero === 2) {
//         console.log('Pulei o numero 2');
//         i++;
//         continue;
//     }

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         break;
//     }
//     console.log(numero);
//     i++;
// }

//com do while
let i = 0;
do {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o numero 2');
        i++;
        continue;
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
    console.log(numero);
    i++;
} while (i < numeros.length);
