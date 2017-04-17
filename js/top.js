window.onscroll = function() {
				var t = document.documentElement.scrollTop || document.body.scrollTop;
				var top_div = document.getElementById("top_div");
				if(t >= 100) {			
					top_div.style.opacity = "1";
					
				} else {
					top_div.style.opacity = "0";
					
				}
			}
$(function(){
	$(".topp").click(function () {
        var speed=300;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 	});
 	$('.code').mousemove(function(){
 		$('.xx').show()
 	})
 	$('.code').mouseout(function(){
 		$('.xx').hide()
 	})
 	
 	$('.fx1').mousemove(function(){
					$('.yjfx').show()
				})
				$('.fx1').mouseout(function(){
					$('.yjfx').hide()
				})
				
		$("#leftul li").click(function() {
			$("#leftul li").eq($(this).index()).addClass("car").siblings().removeClass("car");
			$("#box_right .right").hide().eq($(this).index()).show();
		})
})

