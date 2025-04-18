from odoo import http
from odoo.http import request
import json

class MapaRegionController(http.Controller):

    @http.route('/mapa_regiones/json', type='json', auth='public', website=True, csrf=False)
    def mapa_regiones_json(self):
        regiones = request.env['mapa.region'].sudo().search([])
        data = []
        for region in regiones:
            try:
                geojson = json.loads(region.geo_data)
            except json.JSONDecodeError:
                geojson = {}

            data.append({
                'name': region.name,
                'slug': region.slug,
                'color': region.color or '#ff0000',
                'geo_data': geojson
            })

        return data
