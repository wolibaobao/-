$(function() {
				$('#dowebok').fullpage({
					sectionsColor: ['#fff', '#4BBFC3', '#7BAABE', '#f90','red','white'],
					anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
					menu: '#menu'
				});
				$('.flexslider').flexslider({
					directionNav: true,
					pauseOnAction: false
				});
				$('#gsxw').mousemove(function(){
					$(this).css({"background":"#EE7600","color":"#fff"})
					$('#hyxw').css({"background":"#fff","color":"#333"})
					$('.xw_one').fadeIn(300)
					$('.xw_two').fadeOut(300)
				})
				$('#hyxw').mousemove(function(){
					$(this).css({"background":"#EE7600","color":"#fff"})
					$('#gsxw').css({"background":"#fff","color":"#333"})
					$('.xw_one').fadeOut(300)
					$('.xw_two').fadeIn(300)
				})
				$('.fx1').mousemove(function(){
					$('.yjfx').show()
				})
				$('.fx1').mouseout(function(){
					$('.yjfx').hide()
				})
				
			});
