

(function ()
{
  var app = angular.module("myApp",["ui.router"]);

    app.config(function($urlRouterProvider,$stateProvider,$locationProvider) {

              $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

        $stateProvider.state("/",{
          url:"/",
          templateUrl:"./components/home/home.html"
        })

        .state("signin",{
          url:"/signin",
          templateUrl:"./components/signin/signin.html"
        })

        $urlRouterProvider.otherwise("home");
    })


})();
