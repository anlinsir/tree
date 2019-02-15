require(['config'],function(){
	require(['load','list'],function(){
		require(['jquery'],function($){
            var bubblePart = $('#bubblePart')
            bubblePart.on('click',function(e){
                switch (e.target.dataset.id){
                    case '0':
                        location.href ='/dist/html/register.html' 
                        break;
                    case '1':
                        location.href ='/dist/html/applyfor.html'   
                        break;
                    case '2':
                        location.href ='/dist/html/verifier.html'   
                        break;
                    case '3':
                        location.href ='/dist/html/team.html'   
                        break;
                    case '4':
                        location.href ='/dist/html/service.html'   
                        break;
                    case '5':
                        location.href ='/dist/html/supplier.html'   
                        break;
                    default:
                        break;
                }changepass
            })
            var settingCancle = $('#settingCancle'),
            settingBox = $('#settingBox'),
            openSetting = $('#openSetting'),
            changepass = $('#changepass')
            settingCancle.on('click',function(){
                settingBox.removeClass('show')
            })
            openSetting.on('click',function(){
                settingBox.addClass('show')
            })
            var changeuserdata = $('#changeuserdata')
            changeuserdata.on('click',function(){
                location.href ='/dist/html/changeuser.html' 
                settingBox.removeClass('show')
            })
            changepass.on('click',function(){
                location.href ='/dist/html/changepass.html' 
                settingBox.removeClass('show')
            })



		})
	})
})