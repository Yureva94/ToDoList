const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');

let i = 0;

total.textContent = i;

btn.addEventListener('click', addElements);

function addElements() {
    if (input.value === '')
        return
    i++;
    createDeleteElements(input.value);
    input.value = '';
}

function createDeleteElements(value) {
    const li = document.createElement('li')
    const btn = document.createElement('btn')

    li.className = 'li';
    li.textContent = value;
    result.appendChild(li);

    btn.className = 'btn';
    btn.textContent = 'Удалить';
    li.appendChild(btn);

    btn.addEventListener('click', deleteElements)

    function deleteElements() {
        total.textContent = --i;
        result.removeChild(li);
    }

    li.addEventListener('click', activeLi)

    function activeLi() {
        li.classList.toggle('li-active');
    }

    total.textContent = i;
}


