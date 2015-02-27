app.controller("PopupCtrl",function($scope, $ionicPopup) {

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
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
});