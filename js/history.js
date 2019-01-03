$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});



TweenLite.set(".flip-box", {perspective:800});
TweenLite.set(".flip-box-inner", {transformStyle:"preserve-3d"});
TweenLite.set(".flip-box-back", {rotationY:-180});
TweenLite.set([".flip-box-back", ".flip-box-front"], {backfaceVisibility:"hidden"});

$(".flip-box").hover(
  function() {
    TweenLite.to($(this).find(".flip-box-inner"), 1.2, {rotationY:180, ease:Back.easeOut});
  },
  function() {
    TweenLite.to($(this).find(".flip-box-inner"), 1.2, {rotationY:0, ease:Back.easeOut});  
  }
);

TweenMax.staggerTo($(".flip-box-inner"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);

