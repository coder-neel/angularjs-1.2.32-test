var phonecatControllers = angular.module("phonecatControllers", []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'phones/phones.json'
        }).then(function (response) {
            console.log(response);
            $scope.phones = response.data;
        }, function (error) {
            console.log("Error");
            console.log(error);
        });

        $scope.orderProp = 'age';
    }
]);

phonecatControllers.controller("PhoneDetailCtrl", ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {

        $http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
            $scope.phone =  data;
            $scope.mainImageUrl = data.images[0];
        });

        $scope.setImage = function(imageUrl){
            $scope.mainImageUrl = imageUrl;
        }
        //$scope.phoneId = $routeParams.phoneId;
    }
]);