{
    'name': 'Mapa Leaflet Interactivo de Regiones',
    'version': '1.0',
    'category': 'Website',
    'summary': 'Mapa interactivo con Leaflet.js para regiones vinícolas',
    'author':'Salvador Jiménez Sánchez',
    'depends': ['website'],
    'data': [
        'security/ir.model.access.csv',
        'views/region_views.xml',
        'views/snippets/leaflet_mapa_block.xml',
        #'views/mapa_snippet.xml',
        'views/snippet_templates.xml',
        'views/snippets.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'web_leaflet_mapa_regiones/static/src/js/leaflet_mapa.js',
            'web_leaflet_mapa_regiones/static/src/css/leaflet_mapa.css',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
            'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
            "web_leaflet_mapa_regiones/static/src/js/leaflet_init.js",
        ],
    },
    'installable': True,
    'application': True,
    'website': True,
}
