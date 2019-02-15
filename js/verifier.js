require(['config'],function(){
	require(['load','list'],function(){
		require(['jquery'],function($){
           var comfiredia = $("#comfiredia"),
               comfireOK  = $('.comfireOK'),
               cancleConfirm = $('#cancleConfirm'),
               Confirms = $('#Confirms');
            var lefts = $('#lefts')
            function addShow(){
                comfiredia.addClass('show')
            }
            function removeShow(){
                comfiredia.removeClass('show')
            }
            for(var i = 0 ; i <= comfireOK.length;i++){
                $(comfireOK[i]).on('click',addShow)
            }
            cancleConfirm.on('click',removeShow)

            lefts.on('click',function(){
                window.history.back(-1); 
            })
		})
	})
})