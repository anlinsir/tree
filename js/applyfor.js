require(['config'],function(){
	require(['load','list'],function(){
		require(['jquery'],function($){
          var hiddenTips = $('#hiddenTips'),
          applyTo = $('#applyTo'),
          apply ,
          closeTips = $('#closeTips')
          var lefts = $('#lefts')
          lefts.on('click',function(){
              window.history.back(-1); 
          })
          applyTo.on('click',function(){
            hiddenTips.show()
            apply = setTimeout(function(){
                hiddenTips.hide()
                clearTimeout(apply)
            },2000)
          })
          closeTips.on('click',function(){
            hiddenTips.hide()
          })


		})
	})
})