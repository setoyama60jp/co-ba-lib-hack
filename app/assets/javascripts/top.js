$(function(){
	
	//コンテンツ全体の幅
	var slideContents = $('#slideContents');
	var slideContentsWidth = slideContents.width();
	
	//本棚一つの幅
	var shelfWidth = 203;
	
	//ウィンドウ幅・高さ
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	//移動幅（コンテンツの幅 ー ウィンドウ幅）用の変数
	var moveLimit = 0;
	
	//移動URL
	var linkUrl = [];
	linkUrl[0] = 'http://local.hackathon.jp/top.php';
	linkUrl[1] = 'http://local.hackathon.jp/south.php';
	linkUrl[2] = 'http://local.hackathon.jp/west.php';
	linkUrl[3] = 'http://local.hackathon.jp/north.php';
	
	
	
	//ポジションの値
	var contentsPotision = 0;
	
	//初期幅チェックのフラグ
	var flag1 = false;
	
	//ウィンドウ幅より大きければtrue
	if (slideContentsWidth > windowWidth) {
		flag1 = true;
	} else {
		$('#slideBtn').hide();
	}
	
	if (flag1) {
		moveLimit = -(slideContentsWidth - windowWidth);
		contentsPotision = Math.ceil(moveLimit / 2);
	}
	
	slideContents.css({
		"left": contentsPotision
	});
	
	//移動用の関数
	function contentsMove(w) {
		slideContents.animate({
			"left": w
		});
	}
	
	$('#btnNext').click(function (){
		if (moveLimit > (contentsPotision - shelfWidth)) {
			contentsPotision = moveLimit;
		} else {
			contentsPotision = contentsPotision - shelfWidth;
		}
		
		//console.log(contentsPotision);
		contentsMove(contentsPotision);
	}); 
	
	
	$('#btnPrev').click(function (){
		if (0 < (contentsPotision + shelfWidth)) {
			contentsPotision = 0;
		} else {
			contentsPotision = contentsPotision + shelfWidth;
		}
		
		//console.log(contentsPotision);
		contentsMove(contentsPotision);
	}); 
	
	
	slideContents.find('li a').hover(
		function() {
			shelfName = $(this).find('img').attr('alt');
			$(this).append('<p class="shelfName">' + shelfName + '</p>');
		},function() {
			$(this).find('p').remove();
			//aaaa
		}
	);
	
	
	//スライドボタン
	var slideBtnHeight = windowHeight;
	$('#slideBtn').find('span').css('height', slideBtnHeight);
});