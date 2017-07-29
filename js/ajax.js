$(document).ready(function(){
	var mainShow = $("#mainShow");
	var f = $('.footer li');
	// console.log(f);
	$(f).each(function(key, val){
		$(val).on('click', function(){
			var mSName = mainShow.attr('name');
			switch(mSName) {
				case '1':
					$.ajax({
						type:'GET',
						url: './index.html',
						dataType: 'html',
						jsonpCallback: 'success_my',
						success: function(data){
							// console.log(data);
							$("#mainShow").html(data);
						},
						error: function(err){
							console.log('err');
							// console.log(err);
						}
					});
					break;
				case '2':
					$.ajax({
						type:'GET',
						url: './shop.html',
						dataType: 'html',
						jsonpCallback: 'success_my',
						success: function(data){
							// console.log(data);
							$("#mainShow").html(data);
						},
						error: function(err){
							console.log('err');
							// console.log(err);
						}
					});
					break;
				case '3':
					$.ajax({
						type:'GET',
						url: './shopcar.html',
						dataType: 'html',
						jsonpCallback: 'success_my',
						success: function(data){
							// console.log(data);
							$("#mainShow").html(data);
						},
						error: function(err){
							console.log('err');
							// console.log(err);
						}
					});
					break;
				case '4':
					$.ajax({
						type:'GET',
						url: './shop.html',
						dataType: 'html',
						jsonpCallback: 'success_my',
						success: function(data){
							// console.log(data);
							$("#mainShow").html(data);
						},
						error: function(err){
							console.log('err');
							// console.log(err);
						}
					});
					break;
				default:
					$.ajax({
						type:'GET',
						url: './index.html',
						dataType: 'html',
						jsonpCallback: 'success_my',
						success: function(data){
							// console.log(data);
							$("#mainShow").html(data);
						},
						error: function(err){
							console.log('err');
							// console.log(err);
						}
					});
					break;
			}
		});
	});
	
	$.ajax({
		type:'GET',
		url: './index.html',
		dataType: 'html',
		jsonpCallback: 'success_my',
		success: function(data){
			// console.log(data);
			$("#mainShow").html(data);
		},
		error: function(err){
			console.log('err');
		}
	});
});