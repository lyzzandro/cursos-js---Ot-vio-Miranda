//  Declaração de função (funtion hoisting)

function falaOi() {
    console.log('oie');
}

falaOi();

//  First-class objcts (Objetos de primeira classe)
//  Function expression
const souUmDado = function () {
    console.log('Sou um dado');
};

souUmDado();

//  Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

//  Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando....');
    },
};

obj.falar();
