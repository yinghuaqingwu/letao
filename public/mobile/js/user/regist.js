var itcast = itcast || {};
itcast.register = {
    initCode : function(){
        $('.mycode').on('tap',function(){
            var $btn = $(this);
            if($btn.hasClass('active')){
                return;
            }
            $btn.addClass('active');
            itcast.tools.ajax({
                url : '/user/vCode',
                type : 'get',
                success : function(data){
                        console.log(data.vCode);
                    if(data.vCode){
                        var timer = 10;
                        var ids = window.setInterval(function(){
                            timer--;
                            $btn.html(timer+'s之后获取');
                            if(timer == 0)
                            {
                                clearInterval(ids);
                                $btn.removeClass('active');
                                $btn.html('立即获取');
                            }

                        },1000);
                    }
                }
            });
        });
    },
    initRegist : function(){
        $('.check').on('tap',function(){
            //获取数据
           var params = {
                'username' : $('input[name=username]').val(),
                'mobile' : $('input[name=mobile]').val(),
                'password' : $('input[name=password]').val(),
               'repassword' : $('input[name=repassword]').val(),
                'vCode' : $('input[name=vCode]').val()
            };
            var flag = itcast.register.validateForm(params);
            //发送ajax
            if(flag){
                itcast.tools.ajax({
                    url : '/user/register',
                    type : 'post',
                    data : params,
                    success : function(msg){
                        mui.toast('注册成功');
                        window.location.href = "../index.html";
                    }
                });
            }
        });
    },
    validateForm:function(params){
        var flag = true;
        var msg;
        if(!/^1(3|5|8)[0-9]{9}$/.test(params.mobile)){
            msg = "手机号的格式有误";
            flag = false;
        }
        if(!/^[A-z]{6}$/.test(params.username)){
            msg = "用户名格式有误";
            flag = false;
        }
        if(!/^[A-z]{6}$/.test(params.password))
        {
            msg = "密码格式有错误";
            flag = false;
        }
        if(params.password!=params.repassword)
        {
            msg = "密码输入不一致";
            flag = false;
        }
        //弹出提示框
        msg && mui.toast(msg);
        return flag;
    }

}
