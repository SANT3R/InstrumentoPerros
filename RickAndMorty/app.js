const URL = "https://rickandmortyapi.com/api/character";
const main_card = document.querySelector('#main-card');
const template_card = document.querySelector('#template-card').content;
const fragment = document.createDocumentFragment();
const select = document.getElementById('select');
let listaApi=[];

FechtNombres();

function CreateCard(RickAndMorty) {
    for (let i = 0; i < RickAndMorty.results.length; i++) {
        let clone_template = document.importNode(template_card, true);
        clone_template.querySelector(".img-card").setAttribute("src", RickAndMorty.results[i].image);
        clone_template.querySelector(".img-card").setAttribute('alt', RickAndMorty.results[i].name);
        clone_template.querySelector(".nombre-card").textContent= `${RickAndMorty.results[i].name}`;
        clone_template.querySelector(".genero-card").textContent = `Genero: ${RickAndMorty.results[i].gender}`;
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

function CrearOpciones(RickAndMorty){
    let listaNombres=['Mostrar Todo'];
    for (let i = 0; i < RickAndMorty.results.length; i++) {
        listaNombres.push(RickAndMorty.results[i].name);
        const opciones= document.createElement('option');
        opciones.setAttribute('id', `opcion${i}`);
        opciones.setAttribute('value', listaNombres[i]);
        opciones.textContent = listaNombres[i];
        fragment.appendChild(opciones);
        select.appendChild(fragment);
    }
    listaApi.push(RickAndMorty);
    getSelectValue();
}

function FechtNombres() {
    fetch(URL)
    .then(response => response.json())
    .then(nombre => {
        main_card.innerHTML = '';
        CrearOpciones(nombre)
    })
}

function getSelectValue(){
    let selectValue = document.getElementById("select").value;

    for (let i = 0; i < listaApi[0].results.length; i++) {
        if("Mostrar Todo"==selectValue){
            FechtApi();
        }
        else if(listaApi[0].results[i].name==selectValue){
            main_card.innerHTML = '';
            console.log(selectValue);
            let clone_template = document.importNode(template_card, true);
            clone_template.querySelector(".img-card").setAttribute("src", listaApi[0].results[i].image);
            clone_template.querySelector(".img-card").setAttribute('alt', listaApi[0].results[i].name);
            clone_template.querySelector(".nombre-card").textContent= `${listaApi[0].results[i].name}`;
            clone_template.querySelector(".genero-card").textContent = `Genero: ${listaApi[0].results[i].gender}`;
            fragment.appendChild(clone_template);
            main_card.appendChild(fragment);
        }
    }

}

// function Create(RickAndMorty, numero) {
//     for (let i = 0; i < RickAndMorty.results.length; i++) {
//         let clone_template = document.importNode(template_card, true);
//         clone_template.querySelector(".img-card").setAttribute("src", RickAndMorty.results[numero].image);
//         clone_template.querySelector(".img-card").setAttribute('alt', RickAndMorty.results[numero].name);
//         clone_template.querySelector(".nombre-card").textContent= `${RickAndMorty.results[numero].name}`;
//         clone_template.querySelector(".genero-card").textContent = `Genero: ${RickAndMorty.results[numero].gender}`;
//         fragment.appendChild(clone_template);
//         main_card.appendChild(fragment);
//     }
        
// }
