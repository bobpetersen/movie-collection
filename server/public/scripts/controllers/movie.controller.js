app.controller('MovieController', ['MovieService', '$mdDialog', '$http', function (MovieService, $mdDialog, $http) {
	console.log('MovieController has been loaded');
	const self = this;

	self.newMovie = {
		name: '',
		genre_id: '',
		release_date: '',
		run_time: '',
		image_url: '',
	};

	self.movies = {
		list: []
	};

	self.genre = {
		list: []
	};

	self.image = '';

	self.clearField = function() {
		
	}

	self.getGenre = function () {
		$http({
				method: 'GET',
				url: '/genre'
			}).then((response) => {
				console.log('response', response);
				self.genre.list = response.data;
			})
			.catch((error) => {
				console.log('error making genre GET', error);
				alert('Something went wrong! Check the server.');
			});
	}
	self.getImage = function () {
		var baseUrl = 'https://image.tmdb.org/t/p/w185';
		
		$http({
				method: 'GET',
				url: 'https://api.themoviedb.org/3/search/movie',
				params: {
					api_key: '3b793e33c50e7ecfb5ac61a36536ac6f',
					query: self.newMovie.name,
				}
			}).then((response) => {
				console.log('response', response.data.results[0]);
				self.image = baseUrl + response.data.results[0].poster_path;
				self.newMovie.image_url = self.image;
				self.addMovie();
			})
			.catch((error) => {
				console.log('error making genre GET', error);
				alert('Something went wrong! Check the server.');
			});
	}

	// self.movies = MovieService.movie;
	// self.addMovie = MovieService.addMovie;

	// self.addMovie = function (movie) {
	//   MovieService.addMovie(movie);
	// }
	// self.taco = 'anything at all';

	self.addMovie = function () {
		console.log('addMovie', self.newMovie);
		$http({
			method: 'POST',
			url: '/movie',
			data: self.newMovie
		}).then((response) => {
			alert('Success!');
			self.getMovies();
		}).catch((error) => {
			console.log('error making movies POST', error);
			alert('Something went wrong! Check the server.');
		});
	};

	self.getMovies = function () {
		$http({
				method: 'GET',
				url: '/movie'
			}).then((response) => {
				console.log('response', response);
				self.movies.list = response.data;
			})
			.catch((error) => {
				console.log('error making ships get request', error);
				alert('Something went wrong! Check the server.');
			});
	}
	self.getGenre();
	self.getMovies();
}]);