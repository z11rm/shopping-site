  $(function(){
      $(document).ready(function(){
        $("#sp_navi_btn").click(function () {   <!--sp_navi_btnをクリックしたとき-->
          $(this).next().slideToggle();
        });
      });
    });