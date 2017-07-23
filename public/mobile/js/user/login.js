itcast.login = {
    init : {
        eventListenerInit :function(){
            $('.login_btn').on('tap',function(){
                var params = $('.cz_login').serialize();
                mui('.login_btn').button('loading');
                itcast.tools.ajax({
                    url : '/user/login',
                    type: 'post',
                    data : params,
                    success :function(data){
                            mui('.login_btn').button('reset');
                        if(data.error == 403){
                            mui.toast(data.message);
                        }
                        if(data.success)
                        {
                            window.location.href = "../index.html";
                        }
                    }
                });
            });
        }
    }
}
