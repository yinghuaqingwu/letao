var itcast = itcast || {};
itcast.home = {
    constans:{
        page:1
    },
    init:{
        eventListenerInit:function(){
          $('body').on('tap','.product_buy_btn',function(){
              var productId = this.dataset['productid'];
              window.location.href = 'productDetail.html?productid='+productId;
          })
        },
        //初始化轮番图
            initGallery:function(){
                itcast.tools.ajax({
                    url : "/product/queryProduct",
                    type : 'get',
                    data : {
                        pageSize : 5,
                        page : 1,
                        price : 2
                    },
                    success:function(data){
                        var html = template("galleryTemplateId",data);
                        $('#homeScrollId').html(html);
                        mui('#homeScrollId').slider({
                            interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
                        });
                    }
                });
            },

        initloadData:function(){
            if(itcast.home.constans.page>5){
                return;
            }
            itcast.tools.ajax({
                url : "/product/queryProduct",
                data : {
                    pageSize : 4,
                    page : itcast.home.constans.page++
                },
                type : 'get',
                success : function(data){
                    if(data.data.length>0)
                    {
                        var html = template('loadTempateId',data);
                        $('#pullrefresh .mui-scroll').append(html);
                    }
                }
            });
        },

        //初始化滚动条
            initScroll:function(){
                mui.init({
                    pullRefresh:{
                        container:'#pullrefresh',
                        down:{
                            callback:function(){
                                console.log(1);
                                itcast.home.init.initGallery();
                                mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
                            }
                        },
                        up:{
                            contentrefresh: '正在加载...',
                            callback:function(){
                                console.log(2);
                                itcast.home.init.initloadData();
                                //结束上拉加载
                                mui("#pullrefresh").pullRefresh().endPullupToRefresh();
                            },
                        }
                    },
                })
            }
    }
}

window.onload=function(){
    itcast.home.init.initGallery();
    itcast.tools.fixFooter();
    itcast.home.init.initScroll();
    itcast.home.init.eventListenerInit();
}