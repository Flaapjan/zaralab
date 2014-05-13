'use strict';

angular
	.module('app')
	.factory('loginService',function($http){
		return{
			login:function(user){
				//console.log('enter function service');
				var $promise=$http.post('data/user.php',user); //send data to user.php
				$promise.then(function(msg){
					if(msg.data=='success'){
						console.log('success login');
					}else{
						console.log('error login - ' + msg.data );
					}
				});
			}
		}
	});