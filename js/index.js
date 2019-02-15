require(['config'],function(){
	require(['load','list'],function(){
		require(['jquery'],function($){
			var login = $('#login'),
				loginTelNumber = $('#loginTelNumber'),
				loginPass = $('#loginPass') ,
				forgetPass = $('#forgetPass')
			login.on('click',function(e){
				location.href ='/dist/html/my.html'
			})



		})
	})
})