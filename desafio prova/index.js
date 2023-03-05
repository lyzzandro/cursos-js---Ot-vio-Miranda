let cont = 0;
let sufixo = ['B','KB','MB','GB','TB','PB','EB','ZB','YB'];
let valorInteiro = prompt('Digite um numero inteiro:');

valorInteiro = Number(valorInteiro);

function calcularTamanho(valorInteiro){

    while(true){
        if(valorInteiro < 1024){
            break;
        }

        else{
            valorInteiro /= 1024;
            cont++;
        }
    }

    alert(`${valorInteiro.toFixed(2)} ${sufixo[cont]}`);

}

calcularTamanho(valorInteiro);

/* 
555 = 555.00 B
10000000 = 9,54 MB
2000000000000000000000000 = 1.65 YB
*/