$('.js-navbar-toggle') .on('click', function () {
  $('#js-menu').toggleClass('hidden');
console.log("nav click");
});


$('.bio-home') .click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#bio-home").offset().top
    }, 2000);  
})

/* add other sections here similar to above */
