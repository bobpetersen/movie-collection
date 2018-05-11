app.service('MovieService', ['$http', '$mdToast', function ($http, $mdToast) {
    console.log('MovieService has been loaded');
    const self = this;
    self.movies = {
      data: []
    };
    // self.addMovie = function (movieAdd) {
    //   $http({
    //       method: 'POST',
    //       url: '/movie',
    //       data: movieAdd
    //   }).then((response) => {
    //       alert('Success!');
    //       // self.getMovies();
    //     }).catch((error) => {
    //       console.log('error making movies get request', error);
    //       alert('Something went wrong! Check the server.');
    //     });
    //   }
}]);