(function($) {

  "use strict";

  $(window).on('load', function() {

  /*Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });


    //Mapa Atualmente
    var mapAtual = L.map('mapAtual', {
        center: [-21.1312539, -44.2535548],
        zoom: 13
      });

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmllaGF1cyIsImEiOiJjancxOG5qeDcwNGZlNDVvNXEyOGpwaWEzIn0.wxetZ_BKGpdp4JvOqttX4A'
      }).addTo(mapAtual);

      //Mapa with searchControl
    //  var map = L.map('map').setView( [-21.1312539, -44.2535548],13);
     var map = L.map('map', {
        center: [-21.1312539, -44.2535548],
        zoom: 13
      });
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmllaGF1cyIsImEiOiJjancxOG5qeDcwNGZlNDVvNXEyOGpwaWEzIn0.wxetZ_BKGpdp4JvOqttX4A'
      }).addTo(map);

      var searchControl = L.esri.Geocoding.geosearch().addTo(map);
      //Adding layergroups to searchControl
      var results = L.layerGroup().addTo(map);
      var results2 = L.layerGroup().addTo(mapAtual);
      var popup= L.popup();

      var myIcon = new L.Icon({
          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
          });

      searchControl.on('results', function(data){
        results.clearLayers();
        for(var i = data.results.length - 1; i >= 0; i--){
          results.addLayer(L.marker(data.results[i].latlng,{icon: myIcon})
          .bindPopup($("#msg_subject").val() + " \n" + setPopUp()).openPopup());
          popup
            .setLatLng(data.results[i].latlng)
            .setContent(data.results[i].latlng.toString()
            );

            results2.addLayer(L.marker(data.results[i].latlng,{icon: myIcon})
            .bindPopup($("#msg_subject").val()  + " \n" + setPopUp()).openPopup());
            popup
              .setLatLng(data.results[i].latlng)
              .setContent(data.results[i].latlng.toString()
              );
        }
      })
    //Mapa denuncia
/*
    var map = L.map('map', {
        center: [-21.1312539, -44.2535548],
        zoom: 13
      });
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmllaGF1cyIsImEiOiJjancxOG5qeDcwNGZlNDVvNXEyOGpwaWEzIn0.wxetZ_BKGpdp4JvOqttX4A'
      }).addTo(map);
      var myIcon = new L.Icon({
          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
          });

      var marker, popupText, popup= L.popup();

      function onMapClick(e) {
        marker = L.marker(e.latlng,{icon: myIcon}).addTo(map)
        .bindPopup(setPopUp()).openPopup();
        popup
          .setLatLng(e.latlng)
          .setContent(e.latlng.toString())
      }
      map.on('click', onMapClick);

      marker = L.marker([-21.1254637, -44.2476314],{icon: myIcon}).addTo(map), L.marker([-21.1254637, -44.2476314],{icon: myIcon}).addTo(mapAtual);
    // one page navigation
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });
*/
    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

     /* Testimonials Carousel
    ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        center: true,
        margin: 15,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            960 : {
                items: 3
            },
            1200 : {
                items: 3
            },
            1920 : {
                items: 3
            }
        }
      });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });

}(jQuery));
