$( document ).ready(function() {

const $ = document.querySelector();
        // bind a click event to the 'skip' link
        $(".skip").click(function(event){

            // strip the leading hash and declare
            // the content we're skipping to
            var skipTo="#"+this.href.split('#')[1];

            // Setting 'tabindex' to -1 takes an element out of normal
            // tab flow but allows it to be focused via javascript
            $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

                // when focus leaves this element,
                // remove the tabindex attribute
                $(this).removeAttr('tabindex');

            }).focus(); // focus on the content container
        });
    });

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('footer').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('footer-').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('footer-').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
