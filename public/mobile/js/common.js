var itcast = itcast || {};
itcast.tools = {
    fixFooter:function(){
        $('footer a').on('tap',function(){
            window.location.href = this.href;
        })
    },
    ajax:function(option){
        $.ajax({
            url:option.url,
            type:option.type || "post",
            data:option.data || "",
            bedoreSend:function(){
                return option.beforeSend && option.beforeSend();
            },
            success:function(data){
                option.success && option.success(data);
            },
            error:function(){
                mui.toast('·þÎñÆ÷·±Ã¦£¡');
            }
        })
    }
}
