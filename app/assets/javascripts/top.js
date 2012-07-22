$(function(){
	
	//コンテンツ全体の幅
	var slideContents = $('#slideContents');
	var slideContentsWidth = slideContents.width();
	
	//本棚一つの幅
	var shelfWidth = 203;
	
	//ウィンドウ幅・高さ
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	//ページ移動フラグ
	var nextFlag = false;
	var prevFlag = false;
	
	//移動幅（コンテンツの幅 ー ウィンドウ幅）用の変数
	var moveLimit = 0;
	
	//移動URL
	var linkUrl = [];
	//linkUrl[0] = 'http://local.hackathon.jp/top.php';
	//linkUrl[1] = 'http://local.hackathon.jp/south.php';
	//linkUrl[2] = 'http://local.hackathon.jp/west.php';
	//linkUrl[3] = 'http://local.hackathon.jp/north.php';
	
	linkUrl[0] = 'http://co-ba-library-online.herokuapp.com/';
	linkUrl[1] = 'http://co-ba-library-online.herokuapp.com/show_south_shelf';
	linkUrl[2] = 'http://co-ba-library-online.herokuapp.com/show_west_shelf';
	linkUrl[3] = 'http://co-ba-library-online.herokuapp.com/show_north_shelf';
	
	//現在地
	var currentNum;
	
	if ($('body').hasClass('east')) {
		currentNum = 0;
	} else if ($('body').hasClass('south')) {
		currentNum = 1;
	} else if ($('body').hasClass('west')) {
		currentNum = 2;
	} else if ($('body').hasClass('north')) {
		currentNum = 3;
	}
	
	//最大値
	var maxNum = linkUrl.length;
	
	
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
		if (nextFlag) {
			if (maxNum <= (currentNum + 1)) {
				location.href = linkUrl[0];
			} else {
				location.href = linkUrl[currentNum + 1];
			}
		} else if (moveLimit > (contentsPotision - shelfWidth)) {
			contentsPotision = moveLimit;
			nextFlag = true;	
		} else {
			contentsPotision = contentsPotision - shelfWidth;
		}
		
		prevFlag = false;
		
		//console.log(contentsPotision);
		contentsMove(contentsPotision);
	}); 
	
	
	$('#btnPrev').click(function (){
		if (prevFlag) {
			if (0 > (currentNum - 1)) {
				location.href = linkUrl[maxNum - 1];
			} else {
				location.href = linkUrl[currentNum - 1];
			}
		} else if(0 < (contentsPotision + shelfWidth)) {
			contentsPotision = 0;
			prevFlag = true;	
		} else {
			contentsPotision = contentsPotision + shelfWidth;
		}
		
		nextFlag = false;
		
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