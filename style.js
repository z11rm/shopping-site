//oritatami---------------

$(function () {
		var no=0;
		var accordionItem=$('.oritatami_box');
		//MENUブロック一旦非表示
		accordionItem.find('.oritatami').hide();
		
		//active要素を指定して開く
		accordionItem.find('h2').eq(no).addClass('active').next('div').show();

		//click-action
		accordionItem.find('h2').click(function() {

			//hit判定クラス
			$(this).toggleClass("active");
			var slideItem=$(this).next('div');

			//hit分岐処理
			if ($(this).hasClass('active')) {
				//hitクラスを開く
				slideItem.slideToggle('fast');
			} else {
				//hitクラスを閉じる
				slideItem.slideToggle('fast');
			}
		});

	});


//hunberger-------------
$(function(){
      $(document).ready(function(){
        $("#sp_navi_btn").click(function () { 
          $(this).next().slideToggle();
        });
      });
    });