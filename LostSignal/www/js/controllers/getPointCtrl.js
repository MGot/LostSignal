angular.module('LostSignal.controllers', [])

    .controller('getPointCtrl', function($scope) {
        $scope.sendRequest = function() {
            alert('Latitude: ' + $scope.latitude + '\n' + 'Longitude: ' + $scope.longitude + '\n' + 'Radius: ' + $scope.radius);

            /*

            WYSYŁANIE REQUESTA NA SERWER, ODBIERANIE I UMIESZCZANIE PUNKTÓW NA MAPACH

             */
        }
    });
