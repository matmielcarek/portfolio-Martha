/*****CUSTOM UI SCRIPTS*****/

/*assigning a random icon (growth, drop or no-change) to each font-awesome icon class, which is a child of .stateIcon (.stateIcon.fa)*/
   
    $(document).ready(function(){
        var classes = ["fa-angle-double-down", "fa-angle-double-up", "fa-arrows-h"];

        $(".stateIcon.fa").each(function(){
            $(this).addClass(classes[~~(Math.random()*classes.length)]);
        });
    });


/*positioning "Step-box" in the middle of viewport*/

    $("section").each(function() {
        

        if ($(window).width() < 768)
        {
            $(this).css("min-height", $(window).height());

            if ($(this).height() > $(this).children(":first").height()) { 
              $(this).css("padding-top", ($(this).height() - $(this).children(":first").height()) / 1.7);
               console.log("aaaa")
            } else { 
              $(this).css("padding-top", (($(this).children(":first").height() * 1.05) - $(this).height()));
              console.log("bbbb")
            };
        };
    });