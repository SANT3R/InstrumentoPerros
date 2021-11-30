const URL = "https://dog.ceo/api/breeds/image/random";
const main_card = document.querySelector('#main-card');
const template_card = document.querySelector('#template-card').content;
const fragment = document.createDocumentFragment();
const btn_1 = document.getElementById('btn_1');
const btn_3 = document.getElementById('btn_3');
const btn_9 = document.getElementById('btn_9');
const btn_12 = document.getElementById('btn_12');

btn_1.addEventListener('click', FechtApi);
btn_3.addEventListener('click', FechtApi3);
btn_9.addEventListener('click', FechtApi9);
btn_12.addEventListener('click', FechtApi12);


function CreateCard1(perro, tin) {
    console.log(tin);
    for (let i = 0; i < numero; i++) {
        let clone_template = document.importNode(template_card, true);
        clone_template.querySelector(".img-card").setAttribute("src", perro.message);
        fragment.appendChild(clone_template);
        main_card.appendChild(fragment);
    }
}

function FechtApi() {
    fetch(URL)
    .then(response => response.json())
    .then(card => {
        main_card.innerHTML = '';
        CreateCard(card)
    })
}

function FechtApi3() {
    let numero=3;
    fetch(URL)
    .then(response => response.json())
    .then(card => {
        main_card.innerHTML = '';
        CreateCard(card)
    })
}
function FechtApi9() {
    let numero=9;
    fetch(URL)
    .then(response => response.json())
    .then(card => {
        main_card.innerHTML = '';
        CreateCard(card)
    })
}

function FechtApi12() {
    let numero=12;
    fetch(URL)
    .then(response => response.json())
    .then(card => {
        main_card.innerHTML = '';
        CreateCard(card)
    })
}