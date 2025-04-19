odoo.define('web_leaflet_mapa_regiones.leaflet_mapa', function (require) {
    'use strict';
  
    const publicWidget = require('web.public.widget');
/*  
    publicWidget.registry.LeafletMap = publicWidget.Widget.extend({
      selector: '.s_map_leaflet',
      start: function () {
        if (typeof L === 'undefined') {
          console.error("Leaflet no está cargado.");
          return;
        }
  
        const map = L.map('leaflet_map').setView([48.8566, 2.3522], 5); // Francia
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
      },
    });
  */
    return publicWidget.registry.LeafletMap;
  });
  