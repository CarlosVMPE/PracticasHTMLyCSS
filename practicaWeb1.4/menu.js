$(document).ready(main);

var contador = 1;

function main(){
    $('.prueba').click(function(){
        // $('nav').toggle
        if(contador == 1){
            $('.fondo').animate({
                padding: '0px'
            });
            contador = 0;
        } else {
            contador = 1;
            $('fondo').animate({
                // padding-top: '20'
            });
        }
    });

    // Mostramos y ocultamos submenus
    /*$('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });*/
};