angular.module('assessment').controller('productCtrl',function($scope, shopService, $stateParams){
    $scope.test = 'Issa Test';
    $scope.getProduct = function(id) {
        shopService.getProduct($stateParams.id).then(function(response){
            console.log(response);
            $scope.product = response.data;
        })
    }
    $scope.getProduct();
    console.log($scope.product);
    })
    