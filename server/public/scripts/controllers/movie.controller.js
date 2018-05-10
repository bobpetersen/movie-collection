app.controller('MovieController', ['MovieService', '$mdDialog', function (MovieService, $mdDialog) {
  console.log('MovieController has been loaded');
  const self = this;
  self.movie = MovieService.movie;

  self.addMovie = function (movie) {
    MovieService.addMovie(movie);
  }

}]);