app.controller('GenreController', ['MovieService', '$mdDialog', '$http', function (GenreService, $mdDialog, $http) {
    console.log('GenreController has been loaded');
    const self = this;
      self.genre = {
          list: []
      };

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
      self.getGenre();
}]);