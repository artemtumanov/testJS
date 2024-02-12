'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms ==null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
			lastWatchedFilmScore = prompt('На сколько оцените его?', '');
		
		if (lastWatchedFilm != null && lastWatchedFilm != '' && lastWatchedFilm.length < 50 && lastWatchedFilmScore != null && lastWatchedFilmScore != '') {
			personalMovieDB.movies[lastWatchedFilm] = lastWatchedFilmScore;
		} else {
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB['privat'] === false) {
		console.log(personalMovieDB);
	}
}
showMyDB();

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let favoriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
		personalMovieDB.genres[i] = favoriteGenre;
	}
}
writeYourGenres();