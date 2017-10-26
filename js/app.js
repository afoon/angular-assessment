angular.module('assessment',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: '../views/about.html'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: '../views/blog.html'
            })
            .state('product-details', {
                url: '/product-details/:id',
                templateUrl: '../views/product-details.html',
                controller: 'productCtrl'
            })
            .state('shop', {
                url: '/shops',
                templateUrl: '../views/shop.html',
            });
    
        $urlRouterProvider
            .otherwise('/');
    })