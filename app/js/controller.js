var phonecatApp = angular.module("phonecatApp", []);

// phonecatApp.controller("PhoneListController", function PhoneListController($scope) {
//     $scope.phones = [
//         {
//             'name': 'B Nexus S',
//             'snippet': 'Fast just got faster with Nexus S.',
//             'age': 1
//         },
//         {
//             'name': 'Motorola XOOM™ with Wi-Fi',
//             'snippet': 'The Next, Next Generation tablet.',
//             'age': 2
//         },
//         {
//             'name': 'A Motorola XOOM™ with Wi-Fi',
//             'snippet': 'The Next, Next Generation tablet.',
//             'age': 6
//         },
//         {
//             'name': 'MOTOROLA XOOM™',
//             'snippet': 'The Next, Next Generation tablet.',
//             'age': 3
//         }
//     ];

//     $scope.orderProp = 'age';

// });

phonecatApp.controller('PhoneListController', function ($scope, $http) {
    // $http.get('phones/phones.json').success(function(data) {
    //   $scope.phones = data;
    // });

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
});