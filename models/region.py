from odoo import models, fields

class MapaRegion(models.Model):
    _name = 'mapa.region'
    _description = 'Región Vinícola para Mapa Interactivo'

    name = fields.Char('Nombre de la Región', required=True)
    slug = fields.Char('Slug/Enlace', required=True, help="Ej: 'bourgogne'")
    geo_data = fields.Text('GeoJSON', help='Coordenadas GeoJSON del polígono o punto')
    color = fields.Char('Color del polígono', default='#ff0000')
