$(document).ready(main);

$(function() {
  $('a[href*=\\#]:not([href=\\#carouselExampleIndicators])').click (function() {
	  navbarheigth = document.getElementById('navprincipal').offsetHeight;
	  
	   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - navbarheigth}, 500, 'linear');
    
  });
});


function main(){
	// Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('imagen');
            }
            else {
                  $('nav').removeClass('imagen');
            }
      });
	
	
	$("#btnUnete").click(function(event){
			event.preventDefault();
            var nuevaImagen = "images/Capa 8.png";
            //("#cambioImg").attr("src", nuevaImagen);  // o  $(this).attr("src", nuevaImagen);
			//$("#cambioImg").hide();
			$('#exampleModalCenter').addClass('cambioImg3');

    });
}
	