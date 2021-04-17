/* ==========================================================================
Map
========================================================================== */

"use strict";

function initGoogleMap() {
  if ($("#google-map").length) {
    $("#google-map").gMap({
      latitude: 40.7143528,
      longitude: -74.0059731,
      maptype: "ROADMAP",
      zoom: 13,
      markers: [
        {
          latitude: 40.71771,
          longitude: -74.003245,
          html:
            '<div style="width: 300px;"><h4 style="margin-bottom: 8px;"></h4><div style="align-items:center!important;" class="content content-flex"><div><img style="height:60px;border-radius:100px;" src="assets/img/logos/cssninja.svg"></div><div style="margin-left:20px;"> Iam very happy if you like this template. If you need any support, please feel free to contact us at <strong>hello@cssninja.io</strong></div></div></div>',
          icon: {
            image: "assets/img/graphics/markers/marker-purple.png",
            iconsize: [56, 82],
            iconanchor: [32, 39],
          },
        },
      ],
      doubleclickzoom: true,
      controls: {
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
      },
    });
  }
  if ($("#half-map").length) {
    $("#half-map").gMap({
      latitude: 40.7143528,
      longitude: -74.0059731,
      maptype: "ROADMAP",
      zoom: 13,
      markers: [
        {
          latitude: 40.71771,
          longitude: -74.003245,
          html:
            '<div style="width: 300px;"><h4 style="margin-bottom: 8px;"></h4><div style="align-items:center!important;" class="content content-flex"><div><img style="height:60px;border-radius:100px;" src="assets/img/logos/cssninja.svg"></div><div style="margin-left:20px;"> Iam very happy if you like this template. If you need any support, please feel free to contact us at <strong>hello@cssninja.io</strong></div></div></div>',
          icon: {
            image: "assets/img/graphics/markers/marker-purple.png",
            iconsize: [56, 82],
            iconanchor: [32, 39],
          },
        },
      ],
      doubleclickzoom: true,
      controls: {
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
      },
    });
  }
}

function initMapBox() {
  var token =
    "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";
  var markerOptions = {
    color: "red",
  };

  if ($("#mapbox-1").length) {
    mapboxgl.accessToken = token;
    var map = new mapboxgl.Map({
      container: "mapbox-1",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [12.550343, 55.665957],
      zoom: 8,
    });

    var marker = new mapboxgl.Marker(markerOptions)
      .setLngLat([12.550343, 55.665957])
      .addTo(map);
  } else if ($("#mapbox-2").length) {
    mapboxgl.accessToken = token;
    var map2 = new mapboxgl.Map({
      container: "mapbox-2",
      style: "mapbox://styles/mapbox/light-v10",
      center: [12.550343, 55.665957],
      zoom: 8,
    });

    var marker = new mapboxgl.Marker(markerOptions)
      .setLngLat([12.550343, 55.665957])
      .addTo(map2);
  } else if ($("#mapbox-3").length) {
    mapboxgl.accessToken = token;
    var map3 = new mapboxgl.Map({
      container: "mapbox-3",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [12.550343, 55.665957],
      zoom: 8,
    });

    var marker = new mapboxgl.Marker(markerOptions)
      .setLngLat([12.550343, 55.665957])
      .addTo(map3);
  } else if ($("#mapbox-4").length) {
    mapboxgl.accessToken = token;
    var map3 = new mapboxgl.Map({
      container: "mapbox-2",
      style: "mapbox://styles/mapbox/light-v10",
      center: [12.550343, 55.665957],
      zoom: 8,
    });

    var marker = new mapboxgl.Marker(markerOptions)
      .setLngLat([12.550343, 55.665957])
      .addTo(map3);
  } else if ($("#mapbox-5").length) {
    mapboxgl.accessToken = token;
    var map = new mapboxgl.Map({
      container: "mapbox-5",
      style: "mapbox://styles/mapbox/light-v10",
      center: [12.550343, 55.665957],
      zoom: 16,
    });

    var marker = new mapboxgl.Marker(markerOptions)
      .setLngLat([12.550343, 55.665957])
      .addTo(map);
  }
}
