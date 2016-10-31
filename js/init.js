//slider swiper
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 2000
    });
//slider swiper
//scrol to top
	$(document).ready(function(){
	    $('.in_top').click(function(){
	        $("body,html").animate({"scrollTop":0}, 300);
	    });
	
	    $(window).scroll(function(event){
	        var countScroll = $(window).scrollTop();   
	        if (countScroll>100){
	            $('.in_top').show();
	        }else{
	            $('.in_top').hide();
	        }
	    });
	});
//scrol to top