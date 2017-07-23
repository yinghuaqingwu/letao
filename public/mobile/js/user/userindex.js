var itcast = itcast || {};
itcast.tools.ajax({
    type:'get',
    url:"/user/queryUserMessage",
    success:function(data){
        if(data.username)
        {
            $('.cz_username').html(data.username);
            $('.cz_mobile').html(data.mobile);
        }
        if(data.error==400){
            window.location.href = "login.html";
        }
    },
});
itcast.userIndex = {
    init:{
        eventListenerInit:function(){
            $(".logout_btn").on("tap",function(){
                itcast.tools.ajax({
                    url:"/user/logout",
                    type:"get",
                    success:function(data){
                        if(data.success){
                            window.location.href="login.html";
                        }
                    }
                })
            });
        }
    }
}
