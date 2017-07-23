var itcast = itcast || {};
itcast.addressManager={
    init:{
        initData:function(){
            itcast.tools.ajax({
                url:'/address/queryAddress',
                type:'get',
                success:function(data){
                    if(data.length>0){
                        var obj = {
                            list:data
                        };
                        console.log(obj);
                        var html=template("addressTemplateId",obj);
                        $(".address_list_data").html(html);
                    }
                }
            })
        }
    }
}