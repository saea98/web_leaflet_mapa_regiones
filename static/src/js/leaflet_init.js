document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById("leaflet-map");
    if (mapContainer && typeof L !== "undefined") {
      const map = L.map("leaflet-map").setView([40.4168, -3.7038], 5); // España
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  });

  // Agrega esto a tu archivo JS
odoo.define('web_leaflet_mapa_regiones.snippets', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');
    
    publicWidget.registry.LeafletMapWidget = publicWidget.Widget.extend({
        selector: '.s_leaflet_mapa',
        
        start: function () {
            var self = this;
            return this._super.apply(this, arguments).then(function () {
                self._initMap();
            });
        },
        
        _initMap: function () {
            // Tu código para inicializar el mapa
            var map = L.map('map').setView([23.6345, -102.5528], 5);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            // Resto de tu código para cargar regiones
        },
    });
    
    // Opcionalmente, agrega opciones para el editor
    var options = require('web_editor.snippets.options');
    options.registry.LeafletMapOptions = options.Class.extend({
        start: function () {
            var self = this;
            return this._super.apply(this, arguments);
        },
        
        updateMap: function (previewMode, value, $opt) {
            this.$target.find('#map').empty();
            this.trigger_up('widgets_start_request', {
                editableMode: true,
                $target: this.$target
            });
        },
    });
});
  