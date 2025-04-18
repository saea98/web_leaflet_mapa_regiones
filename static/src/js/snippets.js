odoo.define('web_leaflet_mapa_regiones.snippets', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');
    
    publicWidget.registry.LeafletMapWidget = publicWidget.Widget.extend({
        selector: '.s_leaflet_mapa',
        
        start: function () {
            var self = this;
            return this._super.apply(this, arguments).then(function () {
                if (!self.editableMode) {
                    self._initMap();
                }
            });
        },
        
        _initMap: function () {
            var mapElement = this.el.querySelector('#map');
            if (!mapElement) return;
            
            // Limpia el mapa si ya existe
            if (mapElement._leaflet_id) {
                mapElement._leaflet = null;
            }
            
            var map = L.map(mapElement).setView([23.6345, -102.5528], 5);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
        }
    });
});