// JavaScript Document
window.onload = function(){
//导航鼠标移上显示2级菜单
jQuery('.primary_nav>li').hover(function(){
 $(this).children('.sub_menu').css('display','block')	
},function(){
 $(this).children('.sub_menu').css('display','none')	
});


/* 搜索 清除文本框内容*/
	$(".input-text").focus(function(){if(this.value == "请输入商品名称"){
		this.value = "";}
		}).blur(function(){if(this.value == ""){this.value = "请输入商品名称" ;}
		})
		$(".input-text").click(
		function(){if($(".text01").val() == "请输入商品名称"){
			$(".input-text").val("");}
	});
	$("#liuyan").focus(function(){if(this.value == "输入留言信息"){
		this.value = "";}
		}).blur(function(){if(this.value == ""){this.value = "输入留言信息" ;}
		})
		$("#liuyan").click(		
		function(){if($("#liuyan").val() == "输入留言信息"){
			$("#liuyan").val("");}
	});
	$(".txt-name").focus(function(){if(this.value == "邮箱/用户名/手机号"){
		this.value = "";}
		}).blur(function(){if(this.value == ""){this.value = "邮箱/用户名/手机号" ;}
		})
		$(".txt-name").click(		
		function(){if($(".txt-name").val() == "邮箱/用户名/手机号"){
			$(".txt-name").val("");}
	});
	
	
/*首页大banner*/
/*鼠标移过，左右按钮显示*/
$(".main_content").hover(function(){
	$(this).find(".prev,.next").fadeTo("show",0.1);
},function(){
	$(this).find(".prev,.next").hide();
})
/*鼠标移过某个按钮 高亮显示*/
$(".prev,.next").hover(function(){
	$(this).fadeTo("show",0.7);
},function(){
	$(this).fadeTo("show",0.1);
})

}



		
