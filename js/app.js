$(function() {

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Filter */

    let filter = $("[data-filter]");
    filter.on("click", function() {
        event.preventDefault();
        
        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function() {
                let itemCat = $(this).data('cat');

                if(itemCat != cat){
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        } 
    });
    
});