var itcast = itcast || {};
itcast.cart={
    init: {
        loadCartData:function(){
            itcast.tools.ajax({
                type:'get',
                url:'/cart/queryCartPaging',
                data:{
                    page:1,
                    pageSize:10,
                },
                success:function(data){
                    //console.log(data);
                    console.log(data.data[0].pic[0].picAddr);
                    var html = template('cartTemplateId',data);
                    $('.cart_list_items').html(html);
                }
            });
        },
        eventListenerInit:function(){
            $("body").on("tap",".deleteCart_btn",function(){
                var _this=this;

                var cartId=this.dataset["cartId"];
                var arr=[];
                arr.push(cartId);
                mui.confirm("您确定要删除该购物项吗?","删除提示ʾ",["确定","取消"],function(event){
                    if(event.index==0){
                        itcast.tools.ajax({
                            url:"/cart/deleteCart",
                            type:"get",
                            data:{
                                id:arr
                            },
                            success:function(data){
                                if(data.success){
                                    mui.alert("删除成功","提示","确定",null,"div");
                                    $(_this).parent().parent().remove();
                                }
                            }
                        })
                    }
                },"div")


            });
        }
    }
}