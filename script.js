const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '1');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const firstFilm = prompt('Один из последних просмотренных фильмов?', ''),
	  firstScore = prompt('На сколько оцените его?', ''),
	  secondFilm = prompt('Один из последних просмотренных фильмов?', ''),
	  secondScore = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstFilm] = firstScore;
personalMovieDB.movies[secondFilm] = secondScore;


console.log(personalMovieDB);123