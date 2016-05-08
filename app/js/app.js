
/**
 * Created by Faizan on 5/8/2016.
 */
angular
    .module('profile', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeCtrl',
                templateUrl: '/views/home.html'
            })
            .state('aboutMe',{
                url: '/about-me',
                controller: 'aboutMeCtrl',
                templateUrl: '/views/aboutMe.html'
            })
    });