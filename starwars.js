// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from "./music.js";
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

