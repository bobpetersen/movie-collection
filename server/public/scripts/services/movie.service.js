app.service('MovieService', ['$http', '$mdToast', function ($http, $mdToast) {
	console.log('MovieService has been loaded');
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

	self.getCountGenre = {
		count: []
	};
	self.getImage = {
		pics: []
	};

		self.getImage = function () {
			var baseUrl = 'https://image.tmdb.org/t/p/w342';
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

	self.deleteGenre = function (genre) {
		if (genre.count == 0) {
			$http({
				method: 'DELETE',
				url: `/genre/${genre.id}`
			}).then((response) => {
				self.getGenre();
				alert('Success!');
			}).catch((error) => {
				console.log('error making genre DELETE request', error);
				alert('Something went wrong! Check the server.');
			});
		} else {
			alert('Genre Not Empty!!');
		}
	}

	self.getCount = function () {
		$http({
				method: 'GET',
				url: '/count'
			}).then((response) => {
				console.log('response', response);
				self.getCountGenre.count = response.data;
			})
			.catch((error) => {
				console.log('error making genre GET', error);
				alert('Something went wrong! Check the server.');
			});
	}

	self.addGenre = function (genreAdd) {
		console.log('addGenre', genreAdd);
		$http({
			method: 'POST',
			url: '/genre',
			data: genreAdd
		}).then((response) => {
			alert('Success!');
			self.getGenre();
		}).catch((error) => {
			console.log('error making genre POST ', error);
			alert('Something went wrong! Check the server.');
		});
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
	}
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

}]);