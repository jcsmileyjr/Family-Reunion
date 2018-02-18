//Sets the variable myApp as a Angular applicatation named 'Reunion'
var myApp = angular.module('Reunion',['ui.router']);

// A .config function is used to provide 'state' and url routing for the app thru the stateProvider (from ui-router).
myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider, $state) {

    //If no route or link is select, the app redirects to the nav page
    $urlRouterProvider.otherwise('/homePage');

    $stateProvider
        //The nav state redirects the user to the homePage.html template  
        .state('homePage', {
            url:'/homePage',
            templateUrl: 'homePage/homePage.html'
        })
        //The nav state redirects the user to the reunionFees.html template
        .state('fees', {
            url:'/fees',
            templateUrl: 'dues/reunionFees.html'
        })    
        //The nav state redirects the user to the tShirt.html template
        .state('tShirt', {
            url:'/tShirt',
            templateUrl: 'dues/tShirt.html'
        })      
    
}]);

