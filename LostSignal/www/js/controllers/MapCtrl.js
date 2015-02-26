app.controller("MapCtrl", function($scope, $ionicPlatform, $ionicLoading) {

        $ionicPlatform.ready(function() {
            var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                // disableDefaultUI: true // un-comment to remove default Maps UI
                mapTypeId: google.maps.MapTypeId.HYBRID
            };

            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            $scope.map = map;
        });

        $scope.centerOnMe = function() {
            if(!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.loading.hide();
            }, function(error) {
                alert('Unable to get location: ' + error.message);
            });
        };

    });