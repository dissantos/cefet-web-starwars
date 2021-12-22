// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from "./music.js";
import { restartAnimation } from "./restart-animation.js";
const API_ENDPOINT = 'https://swapi.dev/api'


//Exercicio 1
class Audio {
    constructor(audioUrl, coverImageUrl, title, artist){
        this.audioUrl = audioUrl;
        this.coverImageUrl = coverImageUrl;
        this.title = title;
        this.artist = artist;
    }
}

let audioSWTheme = new Audio('audio/tema-sw.mp3','imgs/logo.svg','Intro', 'John Willians');
let bodyEl = document.body;

play(audioSWTheme, bodyEl);

//Exercicio 2 e 3, Opcional 4
const response = await fetch(API_ENDPOINT+'/films')
const data = await response.json();


let movieList = data.results.sort((a, b) => a.episode_id - b.episode_id);


const numberToRoman = (number) => {
    const romans = {
        1 : 'I',
        2 : 'II',
        3 : 'III',
        4 : 'IV',
        5 : 'V',
        6 : 'VI',
        7 : 'VII',
        8 : 'VIII',
        9 : 'IX'
    };

    return romans[number];
}


let listEl = document.querySelector('#filmes ul');
listEl.innerHTML = '';

for( let movie of movieList ) {
    let roman = numberToRoman(movie.episode_id).padEnd(4, ' ');
    let title = movie.title;
    let domFragment = document.createDocumentFragment();
    let liEl = document.createElement('li');
    liEl.textContent = `Episode ${roman}-  ${title}`
    
    liEl.addEventListener('click', () => {
        let introEl = document.querySelector('.introducao-animada');
        
        introEl.innerHTML = `
            Episode ${roman}
            ${title.toUpperCase()}

            ${movie.opening_crawl}

        `
        restartAnimation(introEl);
    })
    listEl.append(liEl);
}