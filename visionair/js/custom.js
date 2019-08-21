var wasMobile = false;

// Rearrange the Stent grid items for tablet/mobile
function moveGrid() {
    if ($(window).innerWidth() < 992 && !wasMobile) {
        $('#grid4').detach().insertAfter('#grid1');
        $('#grid7').detach().insertAfter('#grid4');
        $('#grid2').detach().insertAfter('#grid7');
        $('#grid5').detach().insertAfter('#grid2');
        $('#grid8').detach().insertAfter('#grid5');
        $('#grid3').detach().insertAfter('#grid8');
        $('#grid6').detach().insertAfter('#grid3');
        wasMobile = true;
    } else if ($(window).innerWidth() >= 992 && wasMobile) {
        $('#grid2').detach().insertAfter('#grid1');
        $('#grid3').detach().insertAfter('#grid2');
        $('#grid4').detach().insertAfter('#grid3');
        $('#grid5').detach().insertAfter('#grid4');
        $('#grid6').detach().insertAfter('#grid5');
        $('#grid7').detach().insertAfter('#grid6');
        $('#grid8').detach().insertAfter('#grid7');
        wasMobile = false;
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

$(window).on('resize', moveGrid);
moveGrid();

$(document).ready(function() {
    console.log('inside ready function');
    $('.nav-link').on('click', function(e) {
        console.log('inside click event');
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

});