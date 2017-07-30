
$(document).ready(function(){
	var li = '';
	// 详细商品信息
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
	// $("#temp").html(localStorage.all);
	many.html(window.localStorage.much);
	// var count = 0;
	add_list.each(function(key, value){
		$(value).bind('click', function(){
			much = many.html();
			much++;
			var lin = parseInt($($(value).prev()).attr('name'));
			li = '<li name="' + lin + '"><div class="dele">x</div><a class="shop-list">' + $(value).prev().html() + '</a></li>';
			// 初始化
			if(localStorage.addLi == undefined){
				localStorage.addLi = '';
			}
			window.localStorage.setItem('addLi' + much, li); // 存入localstorage
			// count++;
			localStorage.addLi = much;
			all = parseInt(all) + parseInt(lin);
			window.localStorage.much = much;
			window.localStorage.all = all;
			jiesuan.html(window.localStorage.all);
			// $("#temp").html(all);
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
		var q = '<li class="car-init">' + localStorage.tempLi + '</li>';
		window.localStorage.tempLi = q;
	}

	//结算按钮
	var clear = $("#clear-btn");
	clear.bind('click', function(){
		q = localStorage.tempLi;
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
			// car.append(localStorage.addLi);
			for (var i = 0; i <= localStorage.addLi; i++) {
				car.append(localStorage.getItem('addLi' + i));
			}
		}
		if(localStorage.addLi == 0){
			car.append(localStorage.tempLi);
		}
	}


		var qq = $(".clear-btn");
		$(qq).bind('click', function(){
			if(localStorage.addLi == undefined || localStorage.much == 0){alert('无商品');}
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

		// 购物车的删除功能
		var dele = $(".article .dele");
		// console.log(dele);
		dele.each(function(key, val){
			$(val).bind('click', function(){
				// 记录有多少商品加入购物车
				var liNum = localStorage.addLi;
				// 获取需要删除的商品标签
				var pre = $(this).parent();
				var money = pre.attr('name');
				money = jiesuan.html() - money;
				localStorage.all = money;
				// console.log(money);
				preOut = $(pre).prop('outerHTML');

				// 与内存中的商品做比对，删除内存中的商品
				for(var i = 0; i < localStorage.length; i++){
					var items = localStorage.getItem('addLi' + i);
					// debugger;
					if (dui(preOut, items)) {
						// debugger;
						localStorage.removeItem('addLi' + i);
						var much1 = localStorage.addLi - 1;
						localStorage.setItem('addLi', much1);
						localStorage.setItem('much', much1);
						pre.remove();
						
						break;
					}
				}

				// 总金额需要变动，商品数也需要变动
				many.html(localStorage.much);
				jiesuan.html(money);


				// 刷新页面，重新显示购物车中商品
				var car = $(".article ul");	
				// car.html('');
				if(localStorage.addLi == 0){
					// car.append(localStorage.addLi);
					// for (var i = 0; i <= localStorage.addLi; i++) {
					// 	// car.append(localStorage.getItem('addLi' + i));
					// }
					car.append(localStorage.tempLi);
				}
			});
		});
});
var dui = function(a, b){
	// debugger;
		if(!b){
			return false;
		}
		for(var i = 0; i < a.length; i++){
			if(a[i] != b[i]){
				return false;
			}
		}
		return true;
	};