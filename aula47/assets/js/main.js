function relogio() {
    function getTimeFromSecond(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-Br', {
            hour12: false,
            timeZone: 'GMT',
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSecond(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            segundos = 0;
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
        }
    });
}

relogio();
