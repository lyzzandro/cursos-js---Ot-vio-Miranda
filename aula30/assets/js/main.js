//Primeira forma de resolver

// const h1 = document.querySelector(".container h1");
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//     const diasSemana = ["domingo","segunda","terça","quarta","quinta","sexta","sábado",
//     ];
//     return diasSemana[diaSemana];
// }

// function getMesTexto(mes) {
//     const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro","janeiro",];
//     return meses[numeroMes];
// }

// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
//     const mes = data.getMonth();
//     const mesTexto = getMesTexto(mes);

//     return (
//         `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} ` +
//         `de ${data.getFullYear()} ` +
//         `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//     );
// }

// h1.innerHTML = criaData(data);

// segunda forma de resolver
const h1 = document.querySelector(".container h1");
const data = new Date();

h1.innerHTML = data.toLocaleString("pt-BR", {
    dateStyle: "full",
    timeStyle: "short",
});
