var phonecatControllers = angular.module("phonecatControllers", []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, phone) {
        $scope.phones = phone.query();
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