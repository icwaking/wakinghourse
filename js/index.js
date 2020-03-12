window.onload = function(){
	$(".input-text").focus(function(){if(this.value == "请输入商品名称"){
		this.value = "";}
		}).blur(function(){if(this.value == ""){this.value = "请输入商品名称" ;}
		})
		$(".input-text").click(
		function(){if($(".text01").val() == "请输入商品名称"){
			$(".input-text").val("");}
	});
	
/*首页banner-tab*/
jQuery(".main_content").slide({ titCell:".chd ul" , mainCell:".float01" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
//导航鼠标移上显示2级菜单
jQuery('.primary_nav>li').hover(function(){
 $(this).children('.sub_menu').css('display','block')	
},function(){
 $(this).children('.sub_menu').css('display','none')	
});


};
