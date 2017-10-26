angular.module('assessment').controller('shopCtrl',function($scope, shopService){
$scope.test = 'Issa Test';
$scope.getProducts = function() {
    shopService.getProducts().then(function(response){
        $scope.products = response.data;
        console.log($scope.products)
    })
}
$scope.getProducts();
})
