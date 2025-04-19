odoo.define('web_leaflet_mapa_regiones.snippets_editor', function (require) {
    'use strict';

    var publicWidget = require('web.public.widget');
    var options = require('web_editor.snippets.options');
    
    publicWidget.registry.LeafletMap = publicWidget.Widget.extend({
        selector: '.s_leaflet_mapa',
        disabledInEditableMode: false,
        
        /**
         * @override
         */
        start: function () {
            if (this.editableMode) {
                // En modo edición, simplemente muestra un mensaje o placeholder
                var mapElement = this.el.querySelector('#map');
                if (mapElement) {
                    mapElement.innerHTML = '<div class="alert alert-info text-center">Mapa Leaflet (visible en modo vista previa)</div>';
                }
                return this._super.apply(this, arguments);
            } else {
                // En modo vista normal, inicializa el mapa
                return this._super.apply(this, arguments).then(this._initMap.bind(this));
            }
        },
        
        /**
         * Inicializa el mapa de Leaflet
         * @private
         */
        _initMap: function () {
            var mapElement = this.el.querySelector('#map');
            if (!mapElement) return;
            
            // Limpia el elemento si ya tiene contenido
            mapElement.innerHTML = '';
            
            try {
                // Verifica si L (Leaflet) está disponible
                if (typeof L === 'undefined') {
                    console.error('Librería Leaflet no encontrada');
                    mapElement.innerHTML = '<div class="alert alert-danger">Error: Librería Leaflet no disponible</div>';
                    return;
                }
                
                // Inicializa el mapa
                var map = L.map(mapElement).setView([23.6345, -102.5528], 5);
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
                
                // Guarda la instancia del mapa para uso posterior
                this.map = map;
            } catch (e) {
                console.error('Error al inicializar el mapa:', e);
                mapElement.innerHTML = '<div class="alert alert-danger">Error al inicializar el mapa</div>';
            }
        },
    });
    
    // Opciones para el editor
    options.registry.LeafletMapOptions = options.Class.extend({
        /**
         * @override
         */
        start: function () {
            return this._super.apply(this, arguments);
        },
        
        /**
         * @override
         */
        onBuilt: function () {
            this._super.apply(this, arguments);
        },
        
        /**
         * @override
         */
        _onLeavingEditMode: function () {
            this._super.apply(this, arguments);
            //this.trigger_up('reload_snippet_dropzones');
        },
    });
});