app.controller('MovieController', ['MovieService', '$mdDialog', '$http', function (MovieService, $mdDialog, $http) {
	console.log('MovieController has been loaded');
	const self = this;

	self.newMovie = MovieService.newMovie;
	self.movies = MovieService.movies;
	self.genre = MovieService.genre;
	self.getGenre = MovieService.getGenre;
	self.addMovie = MovieService.addMovie;
	self.getMovies = MovieService.getMovies;
	self.getImage = MovieService.getImage;

	self.image = '';

	self.getGenre();
	self.getMovies();
}]);