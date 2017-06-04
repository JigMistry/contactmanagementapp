contactApp.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when("/",{
      templateUrl: '../components/authentication/login.html',
      controller:  'AuthController'
    })
    .when("/home",{
      templateUrl: '../components/home/home.html',
      controller: 'HomeController'
    
    }).
    otherwise({
        redirectTo: "/"
    })
      
})
.run(function($rootScope,$cookieStore,$location){
    $rootScope.$on('$routeChangeSuccess',function(){
        if(!$cookieStore.get('currentUser')){
           $location.path('/');
        }
    })
})