'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB['count'] = numberOfFilms;
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
