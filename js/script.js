/* rec1 class - rectangle full height */
$(document).ready(function(){
   rec1Height();
   $(window).resize(rec1Height);
});

function rec1Height()
{
   $('.rec1').each(function() 
   {
    if ($(window).width() > 750) {
      $(this).css("height", $(this).width() * 2); 
    } else {
      $(this).css("height", $(this).width() / 3);
    }
   });
}

/* rec2 class - rectangle - 2pcs h adjusts to available field with 1 sqr1 */
$(document).ready(function(){
   rec2Height();
   $(window).resize(rec2Height);
});

function rec2Height()
{
   $('.rec2').each(function() 
   {
    if ($(window).width() > 750) {
      $(this).css("height", ($('.rec1').height() - $(this).width()) / 2);
    } else {
      $(this).css("height", $(this).width() / 3);
    } 
   });
}

/* rec3 class - rectangle - h adjusts to available field with 3 sqr1 */
$(document).ready(function(){
   rec3Height();
   $(window).resize(rec3Height);
});

function rec3Height()
{
   $('.rec3').each(function() 
   {
      if ($(window).width() > 750) {
      $(this).css("height", $('.rec1').height() - 2 * $(this).width());
    } else {
      $(this).css("height", $(this).width() / 3);
    }
   });
}

/* sqr1 class - square W = H */
$(document).ready(function(){
   sqr1Height();
   $(window).resize(sqr1Height);
});

function sqr1Height()
{
   $('.sqr1').each(function() 
   {
      if ($(window).width() > 750) {
      $(this).css("height", $(this).width());
    } else {
      $(this).css("height", $(this).width() / 3);
    }  
   });
}

/* appearing elements */

$(document).ready(function() {
  if ($(window).width() > 750) {
    var delays = 5;
  } else {
    var delays = 2;
  }
    $("[class^='start-']").each(function(index, $this)
    {
       $(this).delay(400*(index + delays)).fadeTo(800, 1);
    });

/* underline effect */

$(".underline-effect-l").delay(400 * 6.6)
            .animate({
                width: 30 + "%",
                left: 20 + "%"
                },
                200
                )
            .animate({
                width: 0 + "%",
                left: 50 + "%"
                },
                400
                )
            .animate({
                width: 30 + "%",
                left: 20 + "%"
                },
                800
                );

          $(".underline-effect-r").delay(400 * 6.6)
            .animate({
                width: 30 + "%",
                right: 20 + "%"
                },
                200
                )
            .animate({
                width: 0 + "%",
                right: 50 + "%"
                },
                400
                )
            .animate({
                width: 30 + "%",
                right: 20 + "%"
                },
                800
                );

});


$(document).ready(function() {
   
    $(window).scroll(function() {

        $("[class^='app-']").each(function(index, $this)
        {
                    if ( $(this).hasClass('app-img') ) {
                var appearingDist = $(this).height() / 3;
            } else  if ( $(this).hasClass('app-gallery') ) {
                var appearingDist = $(this).height() / 5;
            } else  if ( $(this).hasClass('app-text-s') ) {
                var appearingDist = $(this).height() * 2;
            } else  if ( $(this).hasClass('app-text-m') ) {
                var appearingDist = $(this).height();
            } else  if ( $(this).hasClass('app-button') ) {
                var appearingDist = $(this).height() * 3;
            }

            var triggerLine = $(this).offset().top + appearingDist;
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if(bottomOfWindow > triggerLine)
            {
                $(this).fadeTo(3000, 1); 
            }     
        }); 
    });
});






