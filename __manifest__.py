{
    'name': 'Mapa Leaflet Interactivo de Regiones',
    'version': '16.0.1.0.0',
    'category': 'Website',
    'summary': 'Mapa interactivo con Leaflet.js para regiones vinícolas',
    'author':'Salvador Jiménez Sánchez',
    'website': 'https://github.com/saea98/web_leaflet_mapa_regiones',
    'category': 'Website',
    'depends': ['website'],
    'data': [
        'security/ir.model.access.csv',
        'views/page_home_inherit.xml',
        'views/leaflet_mapa_standalone.xml',
        'views/region_views.xml',
        'views/snippets/leaflet_mapa_block.xml',
        'views/website_snippets.xml',
        
    ],
    'assets': {
        'web.assets_frontend': [
            'web_leaflet_mapa_regiones/static/src/js/leaflet_mapa.js',
            'web_leaflet_mapa_regiones/static/src/css/leaflet_mapa.css',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
            #"web_leaflet_mapa_regiones/static/src/js/leaflet_init.js",
        ],
        'web_editor.assets_wysiwyg': [
            # El JS de snippets para el editor
            '/web_leaflet_mapa_regiones/static/src/js/snippets.js',
        ],
        'web.assets_backend': [
            # Si necesitas Leaflet en el backend
            'web_leaflet_mapa_regiones/static/src/js/leaflet_mapa.js',
            'web_leaflet_mapa_regiones/static/src/css/leaflet_mapa.css',
        ],
    },
    'installable': True,
    'application': True,
    'website': True,
}
