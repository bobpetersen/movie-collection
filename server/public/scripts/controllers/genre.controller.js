app.controller('GenreController', ['MovieService', '$mdDialog', '$http', function (MovieService, $mdDialog, $http) {
    console.log('GenreController has been loaded');
    const self = this;

    self.addGenre = MovieService.addGenre;
    self.getGenre = MovieService.getGenre;
    self.getCount = MovieService.getCount;
    self.genre = MovieService.genre;
    self.getCountGenre = MovieService.getCountGenre;
    self.deleteGenre = MovieService.deleteGenre;
    self.getImage = MovieService.getImage;


    self.getGenre();
    self.getCount();
}]);