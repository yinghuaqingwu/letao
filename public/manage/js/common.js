
	 NProgress.configure({
         	showSpinner:false
         })
         NProgress.start();
         window.onload=function(){
         	NProgress.done();
         }

         $(".navs ul").prev("a").on("click",function(){
     	$(this).next().slideToggle();
     })  
        //检测用户是否登录
        $(function(){
        	$.ajax({
        		type:"get",
        		utl:" /employee/checkRootLogin",
        		success:function(){
        			if(data.success!=true){
        				alert("message");
        				window.location.href="login.html";
        			}
        		}
        	})
        });

        // 退出用户登录
         $(".login_out_bot").on("click",function(){
        	var flag = window.confirm("您真的要退出吗");
        	if(flag)
        	{
        	$.ajax({
        	type:"get",
            url:"/employee/employeeLogout",
            success:function(data){
                if (data.success) {
                	window.location.href="login.html";
                };
            }	
            })
            }
        });