$(document).ready(function () {
    
    
    /* Animation (animate.css) triggers (with waypoint)*/
    
    $('.js-jumbo').waypoint(function(direction) {
        $('.js-jumbo').addClass('animated fadeInLeft')
    },{
        offset: '50%'
    });    
    
    $('.js-row-1').waypoint(function(direction) {
        $('.js-row-1').addClass('animated fadeIn')
    },{
        offset: '50%'
    });    
    $('.js-row-2').waypoint(function(direction) {
        $('.js-row-2').addClass('animated fadeIn')
    },{
        offset: '50%'
    });    
    $('.js-row-3').waypoint(function(direction) {
        $('.js-row-3').addClass('animated fadeIn')
    },{
        offset: '60%'
    });
    $('footer').waypoint(function(direction) {
        $('footer').addClass('animated fadeInUp')
    },{
        offset: '100%'
    });

    
    
    
    /*Magnific Popup*/
  $('.image-link').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      },
      mainClass: 'mfp-with-zoom',
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
  });


    
    
});





