var itcast = itcast || {};
itcast.address={
    init: {
        initPicker:function(mui,doc) {
            mui.init();
            mui.ready(function () {
                var cityPicker3 = new mui.PopPicker({
                    layer: 3
                });
                cityPicker3.setData(cityData3);
                var showCityPickerButton = doc.getElementById('addressId');

                showCityPickerButton.addEventListener('tap', function (event) {
                    cityPicker3.show(function (items) {
                        //�Ӳ�������ȡֵ.
                        var  provinceName=itcast.address._getParam(items[0],"text");
                        var  cityName=itcast.address._getParam(items[1],"text");
                        var  areaName=itcast.address._getParam(items[2],"text");
                        var address=provinceName+cityName+areaName;
                        //���Ե������.
                        doc.getElementById("addressId").value=address;

                    });
                });
            })
        },
        eventListerInit:function(){
            $(".add_address_btn").on("tap",function(){
                var params=$(".cz_form_address").serialize();
                //��ȡ���ݣ����͵�������.
                itcast.tools.ajax({
                    url:"/address/addAddress",
                    data:params,
                    type:"POST",
                    success:function(data){
                        if(data.success){
                            window.location.href="addressManager.html";
                        }
                    }
                });
            });
        }
    },
    _getParam : function(obj, param) {
        return obj[param] || '';
    },
}
