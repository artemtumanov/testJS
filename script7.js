'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		this.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		}
	}, 
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			let lastWatchedFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
				lastWatchedFilmScore = prompt('На сколько оцените его?', '');
			
			if (lastWatchedFilm != null && lastWatchedFilm != '' && lastWatchedFilm.length < 50 && lastWatchedFilmScore != null && lastWatchedFilmScore != '') {
				this.movies[lastWatchedFilm] = lastWatchedFilmScore;
			} else {
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (this.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count < 30) {
			console.log('Вы классический зритель');
		} else if (this.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function () {
		if (this['privat'] === false) {
			console.log(this);
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			let favoriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
			if (favoriteGenre != null && favoriteGenre != '') {
				this.genres[i] = favoriteGenre;
			} else {
				i--;
			}
		}
		this.genres.forEach(function(item, i) {
			console.log(`Любимый жанр #${i+1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function () {
		this.privat ? this.privat = false : this.privat = true;
	}
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
console.log(personalMovieDB);