const URL = "https://dog.ceo/api/breeds/image/random";
const main_card = document.querySelector('#main-card');
const template_card = document.querySelector('#template-card').content;
const fragment = document.createDocumentFragment();
const btn_1 = document.getElementById('btn_1');
const btn_3 = document.getElementById('btn_3');
const btn_9 = document.getElementById('btn_9');
const btn_12 = document.getElementById('btn_12');
let numero=0;

btn_1.addEventListener('click', Boton1);
btn_3.addEventListener('click', Boton2);
btn_9.addEventListener('click', Boton3);
btn_12.addEventListener('click', Boton4);

function Repetir(){
    for (let i = 0; i < numero; i++) {
        main_card.innerHTML = '';
        FechtApi();
    }
}

function CreateCard(perro, tin) {
    let clone_template = document.importNode(template_card, true);
    clone_template.querySelector(".img-card").setAttribute("src", perro.message);
    fragment.appendChild(clone_template);
    main_card.appendChild(fragment);
}

function FechtApi() {
    fetch(URL)
    .then(response => response.json())
    .then(card => {
        CreateCard(card)
    })
}

function Boton1(){
    numero=1;
    Repetir();
}

function Boton2() {
    numero=3;
    Repetir();
}
function Boton3() {
    numero=9;
    Repetir();
}

function Boton4() {
    numero=12;
    Repetir();
}