'use strict';

contactApp.controller('AuthController',['AuthenticationService','$location',function(AuthenticationService,$location){
    
    var self = this;
    this.username = "user";
    this.password = "123";
    this.error = "";
    
    this.onLogin = function(){
        AuthenticationService.Login(self.username,self.password,function(response){
            if(response.success){
               alert('Login Success');
               $location.path('/home');
               self.error="";
            }else{
               alert('Login error');
               self.error = response.message; 
            }
        });    
    }
    
}])