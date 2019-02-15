require(['config'],function(){
	require(['load','list'],function(){
		require(['jquery'],function($){
          var lefts = $('#lefts')
          lefts.on('click',function(){
              window.history.back(-1); 
          })
		})
	})
})