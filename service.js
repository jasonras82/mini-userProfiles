angular.module('userProfiles').service('mainSvc', function() {

  var data = [
    {
      "id": 0,
      "first_name": "george",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
      "id": 1,
      "first_name": "lucille",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
      "id": 2,
      "first_name": "oscar",
      "last_name": "bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ];

  this.getData = function() {
    return data;
  };

  this.toggleFavorite = function(id) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].isFavorite = !data[i].isFavorite;
      }
    }
  };

});
