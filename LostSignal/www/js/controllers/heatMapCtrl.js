var hmap;
var actualMarker;

app.controller("HeatMapCtrl", function($scope, $ionicPlatform, $ionicLoading) {

    $ionicPlatform.ready(function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            // disableDefaultUI: true // un-comment to remove default Maps UI
            mapTypeId: google.maps.MapTypeId.HYBRID
        };

        hmap = new google.maps.Map(document.getElementById("heatmap-canvas"), mapOptions);

        var dataPoints = [new google.maps.LatLng(37.782551, -122.445368),
            new google.maps.LatLng(37.782745, -122.444586),
            new google.maps.LatLng(37.782842, -122.443688),
            new google.maps.LatLng(37.782919, -122.442815),
            new google.maps.LatLng(37.782992, -122.442112),
            new google.maps.LatLng(37.783100, -122.441461),
            new google.maps.LatLng(37.783206, -122.440829),
            new google.maps.LatLng(37.783273, -122.440324),
            new google.maps.LatLng(37.783316, -122.440023),
            new google.maps.LatLng(37.783357, -122.439794),
            new google.maps.LatLng(37.783371, -122.439687),
            new google.maps.LatLng(37.783368, -122.439666),
            new google.maps.LatLng(37.783383, -122.439594),
            new google.maps.LatLng(37.783508, -122.439525),
            new google.maps.LatLng(37.783842, -122.439591),
            new google.maps.LatLng(37.784147, -122.439668),
            new google.maps.LatLng(37.784206, -122.439686),
            new google.maps.LatLng(37.784386, -122.439790),
            new google.maps.LatLng(37.784701, -122.439902),
            new google.maps.LatLng(37.784965, -122.439938),
            new google.maps.LatLng(37.785010, -122.439947),
            new google.maps.LatLng(37.785360, -122.439952),
            new google.maps.LatLng(37.785715, -122.440030),
            new google.maps.LatLng(37.786117, -122.440119),
            new google.maps.LatLng(37.786564, -122.440209),
            new google.maps.LatLng(37.786905, -122.440270),
            new google.maps.LatLng(37.786956, -122.440279),
            new google.maps.LatLng(37.800224, -122.433520),
            new google.maps.LatLng(37.800155, -122.434101),
            new google.maps.LatLng(37.800160, -122.434430),
            new google.maps.LatLng(37.800378, -122.434527),
            new google.maps.LatLng(37.800738, -122.434598),
            new google.maps.LatLng(37.800938, -122.434650),
            new google.maps.LatLng(37.801024, -122.434889),
            new google.maps.LatLng(37.800955, -122.435392),
            new google.maps.LatLng(37.800886, -122.435959),
            new google.maps.LatLng(37.800811, -122.436275),
            new google.maps.LatLng(37.800788, -122.436299),
            new google.maps.LatLng(37.800719, -122.436302),
            new google.maps.LatLng(37.800702, -122.436298),
            new google.maps.LatLng(37.800661, -122.436273)
        ];
        var pointArray = new google.maps.MVCArray(dataPoints);

        var heatmap = new google.maps.visualization.HeatmapLayer({
            dissipating: true,
            map: hmap,
            data: pointArray,
            radius:20,
            opacity: 0.5
        });

        $scope.heatmap = hmap;
    });

    $scope.centerOnMe = function() {

        if(actualMarker != null)
            actualMarker.setMap(null);

        if(!$scope.heatmap) {
            return;
        }

        $scope.loading = $ionicLoading.show({
            content: 'Getting current location...',
            showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
            var myLatlng  = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            $scope.heatmap.setCenter(myLatlng);
            actualMarker = new google.maps.Marker({
                position: myLatlng,
                map: hmap,
                title:"Hello World!"
            });
            var infowindow = new google.maps.InfoWindow({
                content:
                '<p style="color:black">Actual position:' + myLatlng +'</p>' +
                '<p style="color:black">Date: ' + new Date() + '</p>'
                //+'<p style="color:black">Signal strength: ' + signal + '</p>'
            });

            google.maps.event.addListener(actualMarker, 'click', function() {
                infowindow.open(hmap,actualMarker);
            });

            $scope.loading.hide();
        }, function(error) {
            alert('Unable to get location: ' + error.message);
        });
    };
});