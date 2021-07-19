var Main = function(){

    // 頁籤
    $("[tabs-name]").on("click, mouseover", function(){
        var $tabsID = $($(this).attr("tabs-name"));
        $tabsID.addClass("active");
        $tabsID.siblings(".tabs-block").removeClass("active");
    });
    
    // 彈窗
    $('a[data-modal]').on('click', function() {
        var $modal = $($(this).data('modal'));
        if($(this).data('data')){
            var data = eval('('+ $(this).data('data') +')');
            console.log(data);
            $modal.find('.code').text(data.code);
            $modal.find('.name').text(data.name);
        }
        $modal.modal();
        return false;
    });

    // 全選
    $('.checkedAll').on('click', function(){
        if($(this).prop("checked")){
         $('input[name="checkbox[]"], input[name="checkedAll[]"]').each(function(){
          $(this).prop("checked",true);
         })
        }else{
         $('input[name="checkbox[]"], input[name="checkedAll[]"]').each(function(){
          $(this).prop("checked",false);
         })
        }
    });
    $('.checkbox').on('click', function(){
        if(!$(this).prop("checked")){
         $('input[name="checkedAll[]"]').each(function(){
          $(this).prop("checked",false);
         })
        }
    });
    
    // top鈕顯示
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".btnTop").fadeIn();
        }else{
            $(".btnTop").fadeOut();
        }
    });
    // top鈕置頂
    $(".btnTop").on("click", function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
}