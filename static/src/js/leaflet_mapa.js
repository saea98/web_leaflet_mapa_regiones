/** @odoo-module **/

import publicWidget from 'web.public.widget';

publicWidget.registry.leafletMapa = publicWidget.Widget.extend({
    selector: '.leaflet-map',

    start() {
        if (typeof L === 'undefined') {
            console.error('Leaflet no está definido.');
            return;
        }
    
        const map = L.map(this.el).setView([44.8378, -0.5792], 5);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
    
        return this._super(...arguments);
    }
    
});
