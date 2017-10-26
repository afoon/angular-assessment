angular.module('assessment').service('shopService',function($http){

this.getProducts = function(){
    return $http.get('https://practiceapi.devmountain.com/products')
    .then(function(response){
    return response;
}
)}
this.getProduct = function(id){
    return $http.get(`https://practiceapi.devmountain.com/products/${id}`)
    .then(function(response){
    return response;
}
)}
})