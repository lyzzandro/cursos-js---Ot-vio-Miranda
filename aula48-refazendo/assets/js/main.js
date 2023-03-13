const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefas = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefas(textoInput) {
    const li = criaLi();

    li.innerText = textoInput;
    tarefas.appendChild(li);
    criarBotaoApagar(li);
    salvarTarefas();
    inputTarefa.value = '';
}

function criarBotaoApagar(li) {
    li.innerText += ' ';

    const button = document.createElement('button');
    button.innerText = 'Apagar';
    button.setAttribute('class', 'apagar');
    button.setAttribute('title', 'Apagar tarefa');
    li.appendChild(button);
}

// Criando eventlistners
btnTarefas.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefas(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function (key) {
    if (key.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefas(inputTarefa.value);
    }
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let textLi = tarefa.innerText;
        textLi = textLi.replace('Apagar', '').trim();
        listaDeTarefas.push(textLi);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefas(tarefa);
    }
}

adicionaTarefasSalvas();
