window.addEventListener('DOMContentLoaded', () => {

    const d = document;
    const $btn = d.querySelectorAll('.btn');
    const $counter = d.querySelector('#counter');
    let $number = d.querySelector('#showResult');
    let total = 0;
    let acumulador = 0;

    const showBtn = (e) => {

        if(e.firstElementChild.innerHTML === '='){
            total = eval($counter.innerHTML);
            $number.innerHTML = total;
        }else{
            $counter.innerHTML += e.firstElementChild.innerHTML;
        }

        if(e.firstElementChild.innerHTML === 'C'){
            acumulador = 0;
            total = 0;
            $number.innerHTML = 0;
            $counter.innerHTML = '';
        }

    }

    $btn.forEach($btn => {
        $btn.addEventListener('click', () => {
            showBtn($btn);
        })
    })


})