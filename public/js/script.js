// JavaScript for chess website

$(document).ready(function () {
  $('.button-collapse').sideNav();
  $('.parallax').parallax();

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// hoi man
console.log("Hey! Thanks for checking out the website.\nTo find more things created by me, go to:\nhttps://github.com/fredrikaugust");
