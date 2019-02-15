require(['config'],function(){
	require(['load','list'],function(){
		require(['jquery'],function($){
            var lefts = $('#lefts')
            lefts.on('click',function(){
                console.log('gfcgvjh')
                window.history.back(-1); 
            })
            var toDetail = $('#toDetail')
            toDetail.on('click',function(e){
                location.href ='/dist/html/supplierDetail.html?id='+e.target.dataset.id
            })
		})
	})
})