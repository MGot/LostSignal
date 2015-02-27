app.controller("getPointCtrl",function($scope) {

    $scope.otherPoint = function() {
        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: 'Get signal around actual position or some other point?',
            title: 'Points from:',
            scope: $scope,
            buttons: [
                {
                    text: 'Actual position',
                    type: 'button-positive',
                    onTap: function (e) {

                    }
                },
                {
                    text: 'Other point',
                    type: 'button-positive',
                    onTap: function (e) {

                    }
                }
            ]
        });
    }


    $scope.sendRequest = function() {
        alert('Latitude: ' + $scope.latitude + '\n' + 'Longitude: ' + $scope.longitude + '\n' + 'Radius: ' + $scope.radius);

            /*

            WYSYŁANIE REQUESTA NA SERWER, ODBIERANIE I UMIESZCZANIE PUNKTÓW NA MAPACH

             */
        }


    });
