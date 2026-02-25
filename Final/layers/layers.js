var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_500mbufferradius_1 = new ol.format.GeoJSON();
var features_500mbufferradius_1 = format_500mbufferradius_1.readFeatures(json_500mbufferradius_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500mbufferradius_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500mbufferradius_1.addFeatures(features_500mbufferradius_1);
var lyr_500mbufferradius_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_500mbufferradius_1, 
                style: style_500mbufferradius_1,
                popuplayertitle: '500m buffer radius',
                interactive: false,
                title: '<img src="styles/legend/500mbufferradius_1.png" /> 500m buffer radius'
            });
var format_BRP500mbuffer_2 = new ol.format.GeoJSON();
var features_BRP500mbuffer_2 = format_BRP500mbuffer_2.readFeatures(json_BRP500mbuffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BRP500mbuffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BRP500mbuffer_2.addFeatures(features_BRP500mbuffer_2);
var lyr_BRP500mbuffer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BRP500mbuffer_2, 
                style: style_BRP500mbuffer_2,
                popuplayertitle: 'BRP - 500m buffer',
                interactive: true,
    title: 'BRP - 500m buffer<br />\
    <img src="styles/legend/BRP500mbuffer_2_0.png" /> Natuurterrein<br />\
    <img src="styles/legend/BRP500mbuffer_2_1.png" /> Boomgroep<br />\
    <img src="styles/legend/BRP500mbuffer_2_2.png" /> Bosje<br />\
    <img src="styles/legend/BRP500mbuffer_2_3.png" /> Hakhoutbosje<br />\
    <img src="styles/legend/BRP500mbuffer_2_4.png" /> Hoogstamboomgaard<br />\
    <img src="styles/legend/BRP500mbuffer_2_5.png" /> Grasland, blijvend <br />\
    <img src="styles/legend/BRP500mbuffer_2_6.png" /> Grasland, natuurlijk. Hoofdfunctie natuur.<br />\
    <img src="styles/legend/BRP500mbuffer_2_7.png" /> Grasland, natuurlijk. Met landbouwactiviteiten. <br />\
    <img src="styles/legend/BRP500mbuffer_2_8.png" /> Grasland, tijdelijk <br />\
    <img src="styles/legend/BRP500mbuffer_2_9.png" /> Bouwland<br />\
    <img src="styles/legend/BRP500mbuffer_2_10.png" /> Braakland<br />\
    <img src="styles/legend/BRP500mbuffer_2_11.png" /> Agrarisch natuurmengsel<br />\
    <img src="styles/legend/BRP500mbuffer_2_12.png" /> Ruigtes op landbouwpercelen<br />\
    <img src="styles/legend/BRP500mbuffer_2_13.png" /> Graften<br />\
    <img src="styles/legend/BRP500mbuffer_2_14.png" /> Schouwpad<br />\
    <img src="styles/legend/BRP500mbuffer_2_15.png" /> Knip- of scheerheg<br />\
    <img src="styles/legend/BRP500mbuffer_2_16.png" /> Houtwal en houtsingel<br />\
    <img src="styles/legend/BRP500mbuffer_2_17.png" /> Stroken wild gras<br />\
    <img src="styles/legend/BRP500mbuffer_2_18.png" /> Struweelhaag<br />\
    <img src="styles/legend/BRP500mbuffer_2_19.png" /> Struweelrand<br />\
    <img src="styles/legend/BRP500mbuffer_2_20.png" /> Landschapselement, overig<br />\
    <img src="styles/legend/BRP500mbuffer_2_21.png" /> Natuurvriendelijke oever<br />\
    <img src="styles/legend/BRP500mbuffer_2_22.png" /> Overige<br />\
    <img src="styles/legend/BRP500mbuffer_2_23.png" /> Poel en klein historisch water<br />\
    <img src="styles/legend/BRP500mbuffer_2_24.png" /> Sloot<br />\
    <img src="styles/legend/BRP500mbuffer_2_25.png" /> <br />' });
var format_ProvincieLimburgN1101_3 = new ol.format.GeoJSON();
var features_ProvincieLimburgN1101_3 = format_ProvincieLimburgN1101_3.readFeatures(json_ProvincieLimburgN1101_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvincieLimburgN1101_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvincieLimburgN1101_3.addFeatures(features_ProvincieLimburgN1101_3);
var lyr_ProvincieLimburgN1101_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvincieLimburgN1101_3, 
                style: style_ProvincieLimburgN1101_3,
                popuplayertitle: 'Provincie Limburg - N11.01 ',
                interactive: true,
                title: '<img src="styles/legend/ProvincieLimburgN1101_3.png" /> Provincie Limburg - N11.01 '
            });
var format_Selectedsites_4 = new ol.format.GeoJSON();
var features_Selectedsites_4 = format_Selectedsites_4.readFeatures(json_Selectedsites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Selectedsites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selectedsites_4.addFeatures(features_Selectedsites_4);
var lyr_Selectedsites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Selectedsites_4, 
                style: style_Selectedsites_4,
                popuplayertitle: 'Selected sites',
                interactive: true,
                title: '<img src="styles/legend/Selectedsites_4.png" /> Selected sites'
            });

lyr_OSMStandard_0.setVisible(true);lyr_500mbufferradius_1.setVisible(true);lyr_BRP500mbuffer_2.setVisible(true);lyr_ProvincieLimburgN1101_3.setVisible(false);lyr_Selectedsites_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_500mbufferradius_1,lyr_BRP500mbuffer_2,lyr_ProvincieLimburgN1101_3,lyr_Selectedsites_4];
lyr_500mbufferradius_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_BRP500mbuffer_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'fid_2': 'fid_2', 'id_2': 'id_2', 'category': 'category', 'gewas': 'gewas', 'gewascode': 'gewascode', 'jaar': 'jaar', 'status': 'status', 'area': 'area', 'Label_once': 'Label_once', 'web_category': 'web_category', });
lyr_ProvincieLimburgN1101_3.set('fieldAliases', {'fid': 'fid', 'BEHEERTYPE': 'BEHEERTYPE', 'SUBSIDIABI': 'SUBSIDIABI', 'VOORZIENIN': 'VOORZIENIN', 'TOEZICHTBI': 'TOEZICHTBI', 'BIJDRAGEVA': 'BIJDRAGEVA', 'BIJDRAGEMO': 'BIJDRAGEMO', 'BIJDRAGEGE': 'BIJDRAGEGE', 'BEHEERTYPE_1': 'BEHEERTYPE_1', 'IDENTIFICA': 'IDENTIFICA', 'OPPERVLAKT': 'OPPERVLAKT', });
lyr_Selectedsites_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Site_ID': 'Site_ID', 'Image': 'Image', });
lyr_500mbufferradius_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BRP500mbuffer_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'fid_2': 'TextEdit', 'id_2': 'TextEdit', 'category': 'TextEdit', 'gewas': 'TextEdit', 'gewascode': 'Range', 'jaar': 'Range', 'status': 'TextEdit', 'area': 'Range', 'Label_once': 'Range', 'web_category': 'TextEdit', });
lyr_ProvincieLimburgN1101_3.set('fieldImages', {'fid': 'TextEdit', 'BEHEERTYPE': 'TextEdit', 'SUBSIDIABI': 'TextEdit', 'VOORZIENIN': 'TextEdit', 'TOEZICHTBI': 'TextEdit', 'BIJDRAGEVA': 'TextEdit', 'BIJDRAGEMO': 'TextEdit', 'BIJDRAGEGE': 'TextEdit', 'BEHEERTYPE_1': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'OPPERVLAKT': 'TextEdit', });
lyr_Selectedsites_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Site_ID': 'Range', 'Image': 'ExternalResource', });
lyr_500mbufferradius_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BRP500mbuffer_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'fid_2': 'hidden field', 'id_2': 'hidden field', 'category': 'inline label - always visible', 'gewas': 'inline label - always visible', 'gewascode': 'hidden field', 'jaar': 'hidden field', 'status': 'hidden field', 'area': 'inline label - always visible', 'Label_once': 'hidden field', 'web_category': 'no label', });
lyr_ProvincieLimburgN1101_3.set('fieldLabels', {'fid': 'hidden field', 'BEHEERTYPE': 'hidden field', 'SUBSIDIABI': 'hidden field', 'VOORZIENIN': 'hidden field', 'TOEZICHTBI': 'hidden field', 'BIJDRAGEVA': 'hidden field', 'BIJDRAGEMO': 'hidden field', 'BIJDRAGEGE': 'hidden field', 'BEHEERTYPE_1': 'hidden field', 'IDENTIFICA': 'inline label - always visible', 'OPPERVLAKT': 'hidden field', });
lyr_Selectedsites_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Site_ID': 'hidden field', 'Image': 'inline label - always visible', });
lyr_Selectedsites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});