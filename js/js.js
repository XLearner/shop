
$(document).ready(function(){
	var li = '';
	var $size = $(".size ul li");
	$size.each(function(key, value){
			$(value).click(function(){
				$size.each(function(key,value){
					this.className = '';
				})
				if(!(this.className)){
				this.className += "select";}
			}
		
		);
	})
	var addG = $('#addG');
	addG.click(function(){
		var temp = false;
		$size.each(function(key, value){
			if(this.className == 'select'){
				temp = true;
			}
		})
		if(temp === false){
			alert('请选择尺码!');
		}
		else{
			alert('成功添加至购物车');
		}
	})

	//商品列表 - 购物车
	// 点击添加购物车后，统计总金额
	var add_list = $(".add-list");
	var many = $('.many');
	var much = many.html() || window.localStorage.much;
	var jiesuan = $('#clear_all');
	var all =  window.localStorage.all || '0' ;
	jiesuan.html(all);
	$("#temp").html(localStorage.all);
	many.html(window.localStorage.much);
	add_list.each(function(key, value){
		$(value).bind('click', function(){
			much = many.html();
			much++;
			var lin = parseInt($($(value).prev()).attr('name'));
			li = "<li><a class='shop-list'>" + $(value).prev().html() + "</a></li>";
			if(localStorage.addLi == undefined){
				localStorage.addLi = '';
			}
			window.localStorage.addLi += li;
			all = parseInt(all) + parseInt(lin);
			window.localStorage.much = much;
			window.localStorage.all = all;
			jiesuan.html(window.localStorage.all);
			$("#temp").html(all);
			many.each(function(key, value){
			$(value).html(window.localStorage.much);
	})

		});
	});
	if(localStorage.addLi != undefined){
		var carinit = $(".car-init")[0];
		var acarinit = $('.article ul li:eq(0)').html();
		 $(carinit).remove();
		window.localStorage.tempLi = acarinit;
	}
	//结算按钮
	var clear = $("#clear-btn");
	clear.bind('click', function(){
		var q = '<li class="car-init">' + localStorage.tempLi + '</li>';
		alert('购买成功');
		if(localStorage.addLi != undefined){
			$(".article ul li").remove();
		}
		window.localStorage.clear();
		jiesuan.html('0');
		many.each(function(key, value){
			$(value).html('0');
		})
		$(".article ul").append(q);
		$("#sure").css('display', 'none');
	})

	/* 购物车中显示商品*/
	var mainShow = $("#mainShow");
	var mSName = mainShow.attr('name');
	if(mSName == '3'){
		var car = $(".article ul");	
		if(localStorage.addLi){
			car.append(localStorage.addLi);
		}
	}
	

		var qq = $(".clear-btn");
		$(qq).bind('click', function(){
			if(localStorage.addLi == undefined){alert('无商品');}
			else{
			$('#sure').css('display', 'block').css('height', $(document).height());
			var ppp = $('.article ul').html();
			$('.article1 ul').append(ppp);
			$('.article1').attr('class', 'article');}
		})
		$(".sure-back").bind('click', function(){
			$('#sure').css('display', 'none');
		});


		// 底部action状态
		var act = $('.footer li');
		var sName = $("#mainShow");
		act.each(function(key, value){
			$(value).bind('click', function(){
				sName.attr('name', key+1);
				if($(value).attr('class') != 'action'){
					act.each(function(key1, value1){
						$(value1).attr('class','');
					});
					$(value).attr('class', 'action');
				}
			})
		});

});