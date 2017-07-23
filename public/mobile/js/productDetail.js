var itcast = itcast || {};
itcast.product={
    init:{
        params: {
            size:'35',
            productId:1,
            num:1
        },
        eventListenerInit:function(){
            $('body').on('tap',".product_size li",function(){
                $('.product_size li').css('backgroundColor','#f5f5f5');
                itcast.product.init.params.size = $(this).css('backgroundColor','#ccc');
            });
            $('.btn_addCart').on('tap',function(){
                itcast.product.init.params.num = document.getElementById('productNumberId').value;
                itcast.tools.ajax({
                    url:"/cart/addCart",
                    type:"post",
                    data:itcast.product.init.params,
                    success:function(data){
                        if(data.error==400){
                            window.location.href = "user/login.html";
                        }
                        if(data.success){
                            mui.confirm("是否去查看购物车",'添加成功',['确定','取消'],function(event){
                                if(event.index==0){
                                    window.location.href = "cart.html";
                                }
                            },'div');
                        }
                    }
                });
            });

        },
        initScroll:function(){
            /*初始化滚动条.*/
            mui.init({
                pullRefresh:{
                    container: '#prodctScrollId',
                    down: {
                        callback: function(){
                        }
                    },
                    up: {
                        contentrefresh: '正在加载...',
                        callback: function(){

                        }
                    }
                }
            })
        }
    },

    getProductDetailInfo:function(id){
        itcast.tools.ajax({
            url : '/product/queryProductDetail',
            type:'get',
            data : {id:id},
            success:function(data){
                var html = template('producttemplateId',data);
                $('.center_info').html(html);
            }
        });
    }
    }


window.onload = function(){
    var params = window.location.search;
    var id = params.substring(params.indexOf('=')+1,params.length);
    itcast.product.getProductDetailInfo(id);
    itcast.product.init.params.productId = id;
}
