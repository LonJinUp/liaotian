
//轮播插件
var mySwiper = new Swiper ('.swiper-container', {
    autoplay: {
        delay: 2000,//1秒切换一次
    },
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
//浏览器滚动条监视
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if(scrollTop >400){
        $("#bottom-box").css("display","flex");

    }else{
        $("#bottom-box").css("display","none");

    }
});

//点击回复
function reply(){
    layer.open({
        type: 1
        ,content: ` <div class="reply-box" style="box-sizing: border-box">
            <textarea name="" id="ReplyText" cols="30" rows="6">在这里输入留言~</textarea>
        </div>
        <div class="reply-button">发表留言</div>`
        ,anim: 'scale'
        ,style: ' position: relative;left:0; top:0;bottom:0;right:0;margin:auto; width:86%; height:30%; border: none; -webkit-animation-duration: .5s; animation-duration: .5s; border-radius: 10px;'
    });
}
$("#reply").click(function () {
    reply()
});
//点击发发送留言
$("body").on("click",".reply-button",function () {
    var obj={};
    //获取留言框的文字
    obj.replytext=$("#ReplyText").val();
    $.ajax({
        url:"",
        async:true,
        type: "post",
        dataType: "json",
        data:obj,
        beforeSend:function(){
            layer.open({
                type:2,
            });
        },
        success:function (res) {
            layer.closeAll();

        },
        error: function() {
            layer.open({
                content: '前方拥堵，请稍后再试！'
                ,btn: '确定'
            });
        }
    })
});

