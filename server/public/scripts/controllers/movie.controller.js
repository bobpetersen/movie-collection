app.controller('MovieController', ['MovieService', '$mdDialog', '$http', function (MovieService, $mdDialog, $http) {
  console.log('MovieController has been loaded');
  const self = this;
  self.movies = {
    list: []
  };

  // self.movies = MovieService.movie;
  // self.addMovie = MovieService.addMovie;

  // self.addMovie = function (movie) {
  //   MovieService.addMovie(movie);
  // }
  // self.taco = 'anything at all';

  self.addMovie = function (movieAdd) {
    console.log('addMovie', movieAdd);
    $http({
      method: 'POST',
      url: '/movie',
      data: movieAdd
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
  self.getMovies();
}]);