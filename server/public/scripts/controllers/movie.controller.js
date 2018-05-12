app.controller('MovieController', ['MovieService', '$mdDialog', '$http', function (MovieService, $mdDialog, $http) {
  console.log('MovieController has been loaded');
  const self = this;

self.newMovie = {
  name:'',
  genre_id:'',
  release_date:'',
  run_time:'',
  image_url:'',
};

  self.movies = {
    list: []
  };
  self.genre = {
    list: []
  };
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