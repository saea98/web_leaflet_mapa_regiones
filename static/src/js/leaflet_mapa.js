odoo.define('web_leaflet_mapa_regiones.leaflet_map', function (require) {
    'use strict';

    const publicWidget = require('web.public.widget');

    publicWidget.registry.LeafletMap = publicWidget.Widget.extend({
        selector: '.leaflet-mapa-section',
        start: function () {
            if (typeof L === 'undefined') {
                console.warn("Leaflet.js not loaded.");
                return;
            }

            const map = L.map('leaflet_map').setView([40.4168, -3.7038], 5); // Ejemplo: Madrid

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
            }).addTo(map);

            return this._super.apply(this, arguments);
        },
    });
});
